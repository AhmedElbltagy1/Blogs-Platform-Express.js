const mongoose = require("mongoose");
const CommnetSchema = require("../schema/comment.schema")



const CommentModel = mongoose.model("comment",CommnetSchema)

module.exports = CommentModel