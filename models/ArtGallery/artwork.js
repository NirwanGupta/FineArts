const mongoose = require("mongoose");

const artworkSchema = mongoose.Schema(
  {
    img: {
      type: String,
      required: false,
    },
    artist: {
      type: String,
      required: true,
    },
    category:{
        type:String,
        required:true

    }
  }
);

module.exports = mongoose.model("Artwork", artworkSchema);
