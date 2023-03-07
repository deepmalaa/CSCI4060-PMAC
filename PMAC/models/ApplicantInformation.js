const mongoose = require('mongoose');

const ApplicationInfoSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    fullname: {
        type : String,
        required: true
    },
    date: {
        type: String,
        required: true

    },
    cwid:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
        
    },
    cellphone:{
        type: String,
        required: true
        
    },
    ulmEmail:{
        type: String,
        required: true
        
    },
    altEmail:{
        type: String,
        required: true
        
    },
    major: {
        type : String,
        required: true
    },
    minor: {
        type: String,
        required: true

    },
    expectedGraduation:{
        type: String,
        required: true
    },
    collegiateGpa:{
        type: String,
        required: true
        
    },
    proposedEntrance:{
        type: String,
        required: true
        
    },
    examScores:{
        type: String,
        required: true
        
    },
    examDate:{
        type: String,
        required: true
        
    },
    schoolApplication:{
        type: String,
        required: true
        
    },
    AMCASletterID:{
        type: String,
        required: true
        
    },
});

module.exports = ApplicantInformation = mongoose.model('applicantInformation', ApplicationInfoSchema);