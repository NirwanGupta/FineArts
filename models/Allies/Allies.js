const mongoose = require(`mongoose`);

const alliesSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide allie name'],
    },
    image: {
        type: String,
        required: [true, 'Please provide allie image'],
    },
    year: {
        type: String,
        required: [true, 'Please provide allie year'],
    },
    linkedIn: {
        type: String,
    },
    instagram: {
        type: String,
    }
});

module.exports = mongoose.model(`Allies`, alliesSchema);