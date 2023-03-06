const mongoose = require('mongoose');

const ApplicationReleaseSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    authorize: {
        type : String,
        required: true
    },
    evaluate: {
        type: String,
        required: true

    },
    name_release:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
        
    },
    cwid:{
        type: String,
        required: true
        
    },
    signature:{
        type: String,
        required: true
        
    },
    date: {
        type: Date,
        default: Date.now
    },
    school1:{
        type: String,
       
        
    },
    deadline1:{
        type: Date,
        
    },


});

module.exports = ApplicationRelease = mongoose.model('applicationRelease', ApplicationReleaseSchema);