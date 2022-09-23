const mongoose = require('mongoose');
const {roles} = require("../../Helpers/roles");


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
        default: roles.CUSTOMER
      }
    },
    {
      collection: 'users',
      timestamps: true,
    }
  );
// userSchema.pre("save", async function (next) {
//     console.log("pre middleware");
//     this.password = await bycrypt.hash(this.password,Number(process.env.SALT));
//     next();
//   })
const userModel = mongoose.model("user",userSchema);
module.exports = userModel;
