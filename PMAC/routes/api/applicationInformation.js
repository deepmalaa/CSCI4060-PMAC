const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator');


const ApplicationInformation = require('../../models/ApplicationInformation');


// @route   POST api/apprelease
// @desc    Application release
// @access  Private
router.post('/',[auth,[
    check('name', 'Name is required').not().isEmpty(),
    check('signature', 'Signature is required').not().isEmpty(),
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
    const appreleaseFields ={};
    appreleaseFields.user = req.user.id;
    if(fullname) appreleaseFields.fullname = fullname;
    if(date) appreleaseFields.date = date;
    if(cwid) appreleaseFields.cwid = cwid;
    if(address) appreleaseFields.address = address;
    if(cellphone) appreleaseFields.cellphone = cellphone;
    if(ulmEmail) appreleaseFields.ulmEmail = ulmEmail;
    if(atlEmail) appreleaseFields.atlEmail = atlEmail;

    if(major) appreleaseFields.major = major;
    if(minor) appreleaseFields.minor = minor;
    if(expectedGraduation) appreleaseFields.expectedGraduation = cexpectedGraduationwid;
    if(collegiateGpa) appreleaseFields.collegiateGpa = collegiateGpa;
    if(proposedEntrance) appreleaseFields.proposedEntrance = proposedEntrance;
    if(examScores) appreleaseFields.examScores = examScores;
    if(examDate) appreleaseFields.examDate = examDate;

    if(schoolApplication) appreleaseFields.schoolApplication = schoolApplication;
    if(AMCASletterID) appreleaseFields.AMCASletterID = AMCASletterID;
    
    try{
    
        //Create
        let appInfo = new ApplicationInformation(appreleaseFields);
        await appInfo.save();
        res.json(appInfo);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    
});

module.exports = router;