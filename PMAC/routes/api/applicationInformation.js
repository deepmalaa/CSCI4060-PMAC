const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator');


const ApplicantInformation = require('../../models/ApplicantInformation');


// @route   POST api/applicationInformation
// @desc    Application release
// @access  Private
router.post('/', [auth,[
    check('fullname', 'Fullname is required').not().isEmpty(),

]],async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {
        fullname,
        date,
        cwid,
        address,
        cellphone,
        ulmEmail,
        atlEmail,
        major,
        minor,
        expectedGraduation,
        collegiateGpa,
        proposedEntrance,
        examScores,
        examDate,
        schoolApplication,
        AMCASletterID


    } = req.body;

    //build app release obj
    const appInfoFields ={};
    appInfoFields.user = req.user.id;
    if(fullname) appInfoFields.fullname = fullname;
    if(date) appInfoFields.date = date;
    if(cwid) appInfoFields.cwid = cwid;
    if(address) appInfoFields.address = address;
    if(cellphone) appInfoFields.cellphone = cellphone;
    if(ulmEmail) appInfoFields.ulmEmail = ulmEmail;
    if(atlEmail) appInfoFields.atlEmail = atlEmail;

    if(major) appInfoFields.major = major;
    if(minor) appInfoFields.minor = minor;
    if(expectedGraduation) appInfoFields.expectedGraduation = expectedGraduation;
    if(collegiateGpa) appInfoFields.collegiateGpa = collegiateGpa;
    if(proposedEntrance) appInfoFields.proposedEntrance = proposedEntrance;
    if(examScores) appInfoFields.examScores = examScores;
    if(examDate) appInfoFields.examDate = examDate;

    if(schoolApplication) appInfoFields.schoolApplication = schoolApplication;
    if(AMCASletterID) appInfoFields.AMCASletterID = AMCASletterID;
    
    try{
    
        //Create
        let appinfo = new ApplicantInformation(appInfoFields);
        await appinfo.save();
        res.json(appinfo);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Errors');
    }
    
});

module.exports = router;