const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator');


const Profile = require('../../models/Profile');


// @route   POST api/profile
// @desc    Create or update a user profile
// @access  Private
router.post('/',[auth,[
    check('status','Status is required').not().isEmpty(),
    check('major','Major is required').not().isEmpty(),
    check('cwid','CWID is required').not().isEmpty().isLength({min:8}),
]],async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {
        status,
        major,
        cwid,
        currentStudent
    } = req.body;

    //build profile obj
    const profileFields ={};
    profileFields.user = req.user.id;
    if(status) profileFields.status = status;
    if(major) profileFields.major = major;
    if(cwid) profileFields.cwid = cwid;
    if(currentStudent) profileFields.currentStudent = currentStudent;
    
    try{
        let profile = await Profile.findOne({user: req.user.id});

        if(profile){
            //update
            profile = await Profile.findOneAndUpdate(
                {user: req.user.id},
                {$set: profileFields},
                {new: true},
            );
            return res.json(profile);
        }


        //Create
        profile = new Profile(profileFields);
        await profile.save();
        res.json(profile);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    
});

module.exports = router;