const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: false,
  },
  branch: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  phoneno: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: false,
  },
  why: {
    type: String,
    required: false,
  },

  interestedin: {
    modeling: {
        type:Boolean
    },
    artcraft: {
        type:Boolean
    },
    decoration: {
        type:Boolean
    },
    photography: {
        type:Boolean
    },
    designing: {
        type:Boolean
    },
    painting: {
        type:Boolean
    },
    sketching: {
        type:Boolean
    }
  },
});

module.exports = mongoose.model("Form", formSchema);
