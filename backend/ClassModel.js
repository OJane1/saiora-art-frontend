const mongoose = require('mongoose');

const classSchema = new mongoose.Schema ({
    title: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Class', classSchema); 