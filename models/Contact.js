const mongoose = require("mongoose");
const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  type: {
    type: String,
    required: true,
    default: "personal"
  },
  date: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

module.exports = mongoose.model("contact", ContactSchema);
