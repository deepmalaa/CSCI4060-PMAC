const mongoose = require('mongoose');

const FacultyFormSchema = new mongoose.Schema({

        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }, 
        name_applicant: {
            type : String,
            require: true
        },
        name_evaluator: {
            type : String,
            require: true
        },
        intellect: {
            type : String,
            require: true
        },
        motivation: {
            type : String,
            require: true
        },
        initiative: {
            type : String,
            require: true
        },
        socialMaturity: {
            type : String,
            require: true
        },
        emotionalMaturity: {
            type : String,
            require: true
        },
        reliability: {
            type : String,
            require: true
        },
        leadership: {
            type : String,
            require: true
        },
        character: {
            type : String,
            require: true
        },
        communication: {
            type : String,
            require: true
        },
        capacity: {
            type : String,
            require: true
        },
        strengths: {
            type : String,
            require: true
        },
        weaknesses: {
            type : String,
            require: true
        },
        potential: {
            type : String,
            require: true
        },
        comments: {
            type: String
        },

});

module.exports = FacultyForm = mongoose.model('facultyForm', FacultyFormSchema);