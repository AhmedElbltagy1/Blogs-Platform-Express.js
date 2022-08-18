const mongoose = require("mongoose");


const commentSchema = new mongoose.Schema({
    content:String,
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    Postid :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }
})
const Comment = mongoose.model("comment",commentSchema);

module.exports = Comment;
