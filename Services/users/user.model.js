const mongoose = require('mongoose');
const {roles} = require("../../helpers/roles");


const userSchema = new mongoose.Schema(
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
        required:false
      }
    },
    {
      collection: 'users',
      timestamps: true,
    }
  );
const userModel = mongoose.model("user",userSchema);
module.exports = userModel;
