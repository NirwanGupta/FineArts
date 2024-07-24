const mongoose = require(`mongoose`);

const MediaPartnersSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
}, {timestamps: true});

module.exports = mongoose.model(`MediaPartners`, MediaPartnersSchema);