const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const {roles} = require("../../../config/Helpers/roles");

const userSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      verified: {
        type: Boolean,
        default: false,
      },
      password: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        default: roles.CUSTOMER
      }
    },
    {
      collection: 'users',
      timestamps: true,
    }
  );








const User = mongoose.model("user",userSchema);

module.exports = User;
