const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const request = require('request');
const config = require('config');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route   GET api/profile/me
// @desc    Get current user profile
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name']);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
    res.json(profile);
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
  check('ulm_email', 'Please include a valid email').isEmail(),
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
    const foundProfile = await Profile.findOne({ user: req.user.id });
    const experience = req.params.experience;
    foundProfile.experience = foundProfile.experience.filter(
      (exp) => exp._id.toString() !== req.params.exp_id
    );

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