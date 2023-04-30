const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const request = require('request');
const config = require('config');
const checkObjectId = require('../../middleware/checkObjectId');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route   GET api/profile/me
// @desc    Get current user profile
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'email', 'userRole']);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
    res.json(profile);
    const userRole = profile.user.userRole;

    
  }
  catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
});




// @route   POST api/profile
// @desc    Create or update a user profile
// @access  Private
router.post('/', [auth, [
  check('fname', 'Name is required').not().isEmpty(),
  check('ulm_email', 'Please include a valid ULM email').isEmail(),
  check('lname', 'Please include a valid last name').notEmpty(),
  check('cwid', 'Please include a valid cwid').not().isEmpty(),
  check('address', 'Please include a valid address').not().isEmpty(),
  check('alt_email', 'Please include a valid alternative email').isEmail(),
  check('major', 'Please include a valid major').not().isEmpty(),
  check('grad_date', 'Please include a graduation date').not().isEmpty(),
  check('gpa', 'Please include a valid gpa').not().isEmpty(),
  check('entrance_date', 'Please include a valid entrance date').not().isEmpty(),
  check('mcat', 'Please include a valid mcat').not().isEmpty(),
  check('medicalField1', 'Please include a valid field').not().isEmpty(),
  check('medicalField2', 'Please include a valid field').not().isEmpty(),
  check('medicalField3', 'Please include a valid field').not().isEmpty(),
  check('medicalField4', 'Please include a valid field').not().isEmpty(),
  check('medicalField5', 'Please include a valid field').not().isEmpty(),
  check('dat', 'Please include a valid dat').not().isEmpty(),
  check('oat', 'Please include a valid oat').not().isEmpty(),
  check('gre', 'Please include a valid gre').not().isEmpty(),
  //check('schoolType', 'Please include a valid school type').not().isEmpty(),
  check('exam_date', 'Please include a valid exam date').not().isEmpty(),
  check('amcas_id', 'Please include a valid amcas_id').not().isEmpty(),
  check('aacomas_id', 'Please include a valid aacomas_id').not().isEmpty(),
  check('aadsas_id', 'Please include a valid aadsas_id').not().isEmpty(),
  check('aamc_id', 'Please include a valid aamc_id').not().isEmpty(),
  check('caspa_id', 'Please include a valid caspa_id').not().isEmpty(),
  check('facultyEval', 'Please include valid faculty names').not().isEmpty(),
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    fname,
    lname,
    mname,
    cwid,
    address,
    cell,
    ulm_email,
    alt_email,
    bdate,
    major,
    minor,
    grad_date,
    gpa,
    entrance_date,
    mcat,
    dat,
    oat,
    gre,
    scoreBreakdown,
    medicalField1,
    medicalField2,
    medicalField3,
    medicalField4,
    medicalField5,
    schoolType,
    exam_date,
    amcas_id,
    aacomas_id,
    aadsas_id,
    aamc_id,
    caspa_id,
    facultyEval,


  } = req.body;

  //build profile obj
  const profileFields = {};
  profileFields.user = req.user.id;
  if (fname) profileFields.fname = fname;
  if (lname) profileFields.lname = lname;
  if (mname) profileFields.mname = mname;
  if (cwid) profileFields.cwid = cwid;
  if (address) profileFields.address = address;
  if (cell) profileFields.cell = cell;
  if (ulm_email) profileFields.ulm_email = ulm_email;
  if (alt_email) profileFields.alt_email = alt_email;
  if (bdate) profileFields.bdate = bdate;
  if (major) profileFields.major = major;
  if (minor) profileFields.minor = minor;
  if (grad_date) profileFields.grad_date = grad_date;
  if (gpa) profileFields.gpa = gpa;
  if (entrance_date) profileFields.entrance_date = entrance_date;
  if (mcat) profileFields.mcat = mcat;
  if (dat) profileFields.dat = dat;
  if (oat) profileFields.oat = oat;
  if (gre) profileFields.gre = gre;
  if (scoreBreakdown) profileFields.scoreBreakdown = scoreBreakdown;
  if (medicalField1) profileFields.medicalField1 = medicalField1;
  if (medicalField2) profileFields.medicalField2 = medicalField2;
  if (medicalField3) profileFields.medicalField3 = medicalField3;
  if (medicalField4) profileFields.medicalField4 = medicalField4;
  if (medicalField5) profileFields.medicalField5 = medicalField5;
  if (schoolType) profileFields.schoolType = schoolType;
  if (exam_date) profileFields.exam_date = exam_date;
  if (amcas_id) profileFields.amcas_id = amcas_id;
  if (aacomas_id) profileFields.aacomas_id = aacomas_id;
  if (aadsas_id) profileFields.aadsas_id = aadsas_id;
  if (aamc_id) profileFields.aamc_id = aamc_id;
  if (caspa_id) profileFields.caspa_id = caspa_id;
  if (facultyEval) profileFields.facultyEval = facultyEval;

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      //update
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true },
      );
      return res.json(profile);
    }


    //Create
    profile = new Profile(profileFields);
    await profile.save();
    res.json(profile);
  }
  catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

});



// FOR SAVING
router.post('/save', [auth, [
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    fname,
    lname,
    mname,
    cwid,
    address,
    cell,
    ulm_email,
    alt_email,
    bdate,
    major,
    minor,
    grad_date,
    gpa,
    entrance_date,
    mcat,
    dat,
    oat,
    gre,
    medicalField1,
    medicalField2,
    medicalField3,
    medicalField4,
    medicalField5,
    scoreBreakdown,
    schoolType,
    exam_date,
    amcas_id,
    aacomas_id,
    aadsas_id,
    aamc_id,
    caspa_id,
    facultyEval,


  } = req.body;

  //build profile obj
  const profileFields = {};
  profileFields.user = req.user.id;
  if (fname) profileFields.fname = fname;
  if (lname) profileFields.lname = lname;
  if (mname) profileFields.mname = mname;
  if (cwid) profileFields.cwid = cwid;
  if (address) profileFields.address = address;
  if (cell) profileFields.cell = cell;
  if (ulm_email) profileFields.ulm_email = ulm_email;
  if (alt_email) profileFields.alt_email = alt_email;
  if (bdate) profileFields.bdate = bdate;
  if (major) profileFields.major = major;
  if (minor) profileFields.minor = minor;
  if (grad_date) profileFields.grad_date = grad_date;
  if (gpa) profileFields.gpa = gpa;
  if (entrance_date) profileFields.entrance_date = entrance_date;
  if (mcat) profileFields.mcat = mcat;
  if (dat) profileFields.dat = dat;
  if (oat) profileFields.oat = oat;
  if (gre) profileFields.gre = gre;
  if (scoreBreakdown) profileFields.scoreBreakdown = scoreBreakdown;
  if (medicalField1) profileFields.medicalField1 = medicalField1;
  if (medicalField2) profileFields.medicalField2 = medicalField2;
  if (medicalField3) profileFields.medicalField3 = medicalField3;
  if (medicalField4) profileFields.medicalField4 = medicalField4;
  if (medicalField5) profileFields.medicalField5 = medicalField5;
  if (schoolType) profileFields.schoolType = schoolType;
  if (exam_date) profileFields.exam_date = exam_date;
  if (amcas_id) profileFields.amcas_id = amcas_id;
  if (aacomas_id) profileFields.aacomas_id = aacomas_id;
  if (aadsas_id) profileFields.aadsas_id = aadsas_id;
  if (aamc_id) profileFields.aamc_id = aamc_id;
  if (caspa_id) profileFields.caspa_id = caspa_id;
  if (facultyEval) profileFields.facultyEval = facultyEval;

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      //update
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true },
      );
      return res.json(profile);
    }


    //Create
    profile = new Profile(profileFields);
    await profile.save();
    res.json(profile);
  }
  catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

});
// // @route    PUT api/profile/work-experience
// // @desc     Add profile experience
// // @access   Private
// router.put(
//     '/work-experience',
//     auth,
//     check('title', 'Title is required').notEmpty(),
//     check('company', 'Company is required').notEmpty(),

//     async (req, res) => {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }

//       try {
//         const profile = await Profile.findOne({ user: req.user.id });

//         profile.work_experience.unshift(req.body);

//         await profile.save();

//         res.json(profile);
//       } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server app Error');
//       }
//     }
//   );

// @route    PUT api/profile/work-experience
// @desc     Add profile experience
// @access   Private
router.put(
  '/:experience',
  auth,
  check('title', 'Title is required').notEmpty(),
  check('company', 'Company is required').notEmpty(),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const profile = await Profile.findOne({ user: req.user.id });
      const a = req.params.experience
      console.log(profile[a])
      profile[a].unshift(req.body);


      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server app Error');
    }
  }
);

// @route    DELETE api/profile/work-experience/:exp_id
// @desc     Delete experience from profile
// @access   Private

router.delete('/:experience/:exp_id', auth, async (req, res) => {
  try {
    console.log("API: :experience :exp_id")
    const foundProfile = await Profile.findOne({ user: req.user.id });
    const experience = req.params.experience;
    foundProfile[experience] = foundProfile[experience].filter(
      (exp) => exp._id.toString() !== req.params.exp_id
    );
    console.log(foundProfile[experience])

    await foundProfile.save();
    return res.status(200).json(foundProfile);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
});

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['fname', 'lname']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route    GET api/profile/search
// @desc     Get specific profile
// @access   Public
router.get('/search/:key', async (req, res) => {
  try {
    const profile = await Profile.find(
      {
        "$or":[
          {fname:{$regex:req.params.key}},
          {lname:{$regex:req.params.key}},
          {cwid:{$regex:req.params.key}},
        ]
      }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;


// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Private
router.get(
  '/user/:user_id',
  checkObjectId('user_id'), 
  async ({ params: { user_id } }, res) => {
    try {
      const profile = await Profile.findOne({
        _id: user_id
      }).populate('user');

      if (!profile) return res.status(400).json({ msg: 'Profile not found' });

      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: 'Server error' });
    }
  }
);

router.put(
  '/add/interview_evaluation/:id',
  auth,
  check('name_evaluator', 'Evaluator name is required').notEmpty(),

  async (req, res) => {
    try {
      console.log(req.body.applicant_id)
      const profile = await Profile.findOne({ _id:req.body.applicant_id });
      const a = "interview_evaluation"
      console.log(profile)

      profile[a].unshift(req.body);


      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server app Error');
    }
  }
);

// @route    DELETE api/profile/work-experience/:exp_id
// @desc     Delete experience from profile
// @access   Private

router.delete('/delete/interview_evaluation/:exp_id/:userid', auth, async (req, res) => {
  try {
    // console.log("API: :evaluation :exp_id")
    const foundProfile = await Profile.findOne({ _id: req.params.userid });
    const evaluation = "interview_evaluation";
    foundProfile[evaluation] = foundProfile[evaluation].filter(
      (exp) => exp._id.toString() !== req.params.exp_id
    );
    console.log(foundProfile[evaluation])

    await foundProfile.save();
    return res.status(200).json(foundProfile);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }
});

/*
router.put(
  '/',
  auth,
  check('name_evaluator', 'Evaluator name is required').notEmpty(),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const profile = await Profile.findOne({ user: req.user.id });
      const a = req.params.evaluation
      console.log(profile[a])
      profile[a].unshift(req.body);


      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server app Error');
    }
  }
);

*/