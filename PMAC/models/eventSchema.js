const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type : String,
        required: true
    },
    start: {
        type: Date,
        required: true

    },
    end:{
        type: Date,
        required: true
    },
    daysOfWeek:{
        type: Number,
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
});

module.exports = Calendar = mongoose.model('eventSchema', eventSchema);