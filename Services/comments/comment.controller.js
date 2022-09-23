const CommentService = require('./comment.service');
const { ErrorHandler } = require("../../utils/error");
const error = require('../../utils/errors');


exports.CreateComment = async (req, res,next) => {
  try {
    const Comment_info = req.body;
    const newComment = await CommentService.CreateComment(Comment_info);

    res.status(200).json({message: "Comment Created",newComment})
  } catch (error) {
        next(error)
  }
}
exports.updatecomment = async (req, res) => {
  try {
    const Commenet_id = req.params;
    const Comment_info = req.body;

    const isExist = await CommentService.getComment(Commenet_id)
    if (!isExist) {
      throw new ErrorHandler(401,error.NOT_FOUND);
    }
    const updatedcomment = await CommentService.updateComment(Comment_info);
    res.json({message: 'update comment success',data: updatedcomment});
  } catch (error) {
    next(error)
  }
}
exports.deletecomment = async (req, res) => {
  try {
    const Comment_id  = req.params;

    const Comment = await CommentService.getComment(Comment_id);

    if (!isExist) {
      throw new ErrorHandler(401,error.NOT_FOUND);
    }
    await CommentService.deleteComment(Comment_id )
    res.json({message: 'Comment deleted Successfully',});
  } catch (error) {
    next(error)
  }
}