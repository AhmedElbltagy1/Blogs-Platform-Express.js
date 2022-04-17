const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{ type:String },
    email:{ type:String},
    password:{type:String},
    role:{type:String,default:'user'},
    profilePicture:{type:String}
})

const User = mongoose.model("user",userSchema);

module.exports =User;
