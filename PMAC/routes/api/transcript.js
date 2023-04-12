const mongoose = require('mongoose');
const {GridFsStorage} = require('multer-gridfs-storage');
const router = require('express').Router();
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile')
const User = require('../../models/User')

const mongoURI = "mongodb+srv://bhomid:fX5HerW8ghGLvncr@pmac.gxzhf9r.mongodb.net/?retryWrites=true&w=majority";
const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let gfs;
conn.once('open', () => {
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'transcripts',
  });
});

const storage = new GridFsStorage({
  url: mongoURI,
  options: { useUnifiedTopology: true },
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'transcripts',
        };
        resolve(fileInfo);
      });
    });
  },
});


const store = multer({
  storage,
  limits: { fileSize: 20000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

function checkFileType(file, cb) {
  const filetypes = /pdf/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) return cb(null, true);
  
  cb('filetype');
}

const uploadMiddleware = (req, res, next) => {
  const upload = store.single('transcript');
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).send('File too large');
    } else if (err) {
      if (err === 'filetype') return res.status(400).send('PDF files only');
      // An unknown error occurred when uploading.
      return res.sendStatus(500);
    }
    next();
  });
};

router.post('/upload', auth, uploadMiddleware, async (req, res) => {
  // get the .file property from req that was added by the upload middleware
  const { file } = req;
  // and the id of that new image file
  const { id } = file;
  const {userId} = req.user.id;

  if (file.size > 5000000) {
    deleteImage(id);
    return res.status(400).send('file may not exceed 5mb');
  }
  
  const foundUser = await Profile.findOne({user: req.user.id });
  if(!foundUser) return res.status(400).send('user not found');

  const profileId = foundUser.id;
  console.log(profileId)

  //check if user already has a transcript
  let currentPic = foundUser.transcript;

  if (currentPic){
    let currentPicId;

    try{
        currentPicId = new mongoose.Types.ObjectId(currentPic);
    }
    catch (err)
    {
      console.log('invalid id: ', currentPic)
    }

    gfs.delete(currentPicId, (err) =>{
      if(err) return res.status(500).send('database error');
    })
  }

  Profile.findByIdAndUpdate(profileId ,{transcript: id}, {userFindAndModify: true, new:true})
  .then(profile => res.send(profile.transcript))
  .catch((err) =>{
    console.log('db error in updating transcript', err)
  });
});

const deleteImage = (id) => {
  if (!id || id === 'undefined') return res.status(400).send('no image id');
  const _id = new mongoose.Types.ObjectId(id);
  gfs.delete(_id, (err) => {
    if (err) return res.status(500).send('image deletion error');
  });
};

// this route will be accessed by any img tags on the front end which have
// src tags like
// <img src="/api/image/123456789" alt="example"/>
// <img src={`/api/image/${user.profilePic}`} alt="example"/>
router.get('/:id', ({ params: { id } }, res) => {
  // if no id return error
  if (!id || id === 'undefined') return res.status(400).send('no image id');
  console.log("from backend",id);
  // if there is an id string, cast it to mongoose's objectId type
  const _id = new mongoose.Types.ObjectId(id);
  // search for the image by id
  gfs.find({ _id }).toArray((err, files) => {
    if (!files || files.length === 0)
      return res.status(400).send('no files exist');
    // if a file exists, send the data
    gfs.openDownloadStream(_id).pipe(res);
  });
});

module.exports = router;
