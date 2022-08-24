const {Schema} = require("mongoose")
const {roles} = require("../../../config/Helpers/roles")
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: roles.customer
     
    },
    profilePicture: {
        type:String
    }
  },
  {
    collection: 'users',
    timestamps: true,
  }
);

module.exports = userSchema;
