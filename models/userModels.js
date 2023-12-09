const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "name is require"],
  },
  email: {
    type: String,
    required: [true, "email is require"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  Avatar: {
    type: Boolean,
    default: false,
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
