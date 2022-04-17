const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    title:{ type:String },
    description:{ type:String},
    userId:{type:mongoose.Schema.Types.ObjectId, ref:'user'},
    postImage:{type:String}
})

const Post = mongoose.model("Post",PostSchema);
module.exports = Post;