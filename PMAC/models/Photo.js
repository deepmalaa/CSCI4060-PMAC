const mongoose = require('mongoose');

const PhotoSchema = mongoose.Schema(

    {
        file_path:{
        type: String,
        required: true
    },
    file_mimetype:{
        type: String,
        required: true
    }
    },
    {
        timestamp: true
    }

);

module.exports = Photo = mongoose.model('file', PhotoSchema);