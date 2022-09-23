const CommentModel = require("./comment.model")


exports.getComment = async(Comment_id) =>{
    const Comment = await CommentModel.findOne({Comment_id});
    return Comment;
}
exports.CreateComment =async (comment_info) =>{
    const comment = await CommentModel.insertMany(comment_info);
    return comment;
}
exports.updateComment = async (comment_id) => {
    const comment  = await CommentModel.updateOne(comment_id)
    return comment;
}
exports.deleteComment = async (comment_id) => {
    const comment = await CommentModel.deleteOne({comment_id});
    return comment; 
}
