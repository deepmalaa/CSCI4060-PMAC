const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    status:{
        type: String,
        
    },
    major:{
        type: String,
        required: true
    },
    cwid:{
        type: String,
        required: true
    },
    currentStudent:{
        type: Boolean,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);