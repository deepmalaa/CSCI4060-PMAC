const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator');


const ApplicationRelease = require('../../models/ApplicationRelease');
const User = require('../../models/User');

// @route   POST api/apprelease
// @desc    Application release
// @access  Private
router.post('/',[auth,[
    check('signature', 'Name is required').not().isEmpty(),
    check('authorize', 'Authorize is required').not().isEmpty(),
]],async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    
    const {
        authorize,
        evaluate,
        name_release,
        name,
        cwid,
        signature,
        date


    } = req.body;

    //build app release obj
    const appreleaseFields ={};
    appreleaseFields.user = req.user.id;
    if(authorize) appreleaseFields.authorize = authorize;
    if(evaluate) appreleaseFields.evaluate = evaluate;
    if(name_release) appreleaseFields.name_release = name_release;
    if(name) appreleaseFields.name = name;
    if(cwid) appreleaseFields.cwid = cwid;
    if(signature) appreleaseFields.signature = signature;
    if(date) appreleaseFields.date = date;
    
    try{
    
        //Create
        let appRelease = new ApplicationRelease(appreleaseFields);
        await appRelease.save();
        res.json(appRelease);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    
});


router.get('/', auth, async (req, res) => {
    //console.log("HERERERERERERERE");
    //console.log(req.user);
    try {
      const waivers = await ApplicationRelease.findOne({user: req.user.id }).populate('user', ['authorize', 'evaluate', 'name_release']);
      
      res.json(waivers);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  // get user by certain id
  router.get('/user/:id', auth, async (req, res) => {

    try {
      const waivers = await ApplicationRelease.findOne({user: req.params.id }).populate('user', ['authorize', 'evaluate', 'name_release']);
      
      res.json(waivers);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;