const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    star: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
