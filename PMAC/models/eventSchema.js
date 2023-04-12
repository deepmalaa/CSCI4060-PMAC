const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type : String,
        required: true
    },
    start: {
        type: String,
        required: true

    },
    end:{
        type: String,
        required: true
    },
    daysOfWeek:{
        type: Array,
        required: true
        
    },
    startTime:{
        type: String,
        required: true
        
    },
    endTime:{
        type: String,
        required: true
        
    },
    id:{
        type: String,
        required: true
        
    },
});

module.exports = Calendar = mongoose.model('eventSchema', eventSchema);