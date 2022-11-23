const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    validate: {
      validator: (v) => {
        return validator.isEmail(v);
      },
      message: `{VALUE} is not a valid email`,
    },
  },
  password: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
