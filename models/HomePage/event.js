const mongoose = require('mongoose');

const eventSchema=mongoose.Schema({
    img: {
        type: String,
        required: false
    },
    title:{
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    popularity:{
        type:Number,
        default:0

    }
},
{
    timestamps: true
});

module.exports=mongoose.model('Event',eventSchema);