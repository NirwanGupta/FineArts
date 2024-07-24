const mongoose = require("mongoose");

const workshopSchema = new mongoose.Schema({
    image: {
        type: String,
        required: [true, "Please provide image"],
    },
    name: {
        type: String,
        required: [true, "Please provide name"],
    },
    description: {
        type: String,
        required: [true, "Please provide desc"],
    },
    mentoredBy: {
        type: String,
        required: [true, "Please provide mentor"],
    },
},{timestamps: true});

module.exports = mongoose.model('Workshop', workshopSchema);