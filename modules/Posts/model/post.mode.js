const mongoose = require("mongoose");

const PostSchema = require("../schema/post.schema");



const PostModel = mongoose.model("post",PostSchema)

module.exports = PostModel