const CommentService = require('./comment.service');
const { ErrorHandler } = require("../../utils/error");
const error = require('../../utils/errors');
const { response } = require('express');


exports.createComment = async (req, res,next) => {
try{
    const Comment_info = req.body;
    const newComment = await CommentService.CreateComment(Comment_info);
    return response(true,200,newComment,res)
}catch (error) {
    next(error)
  }
}
exports.updateComment = async (req, res) => {
try{
    const Commenet_id = req.params;
    const Comment_info = req.body;
    // find the comment
    const isExist = await CommentService.getComment(Commenet_id)
    if (!isExist) {
      throw new ErrorHandler(401,error.NOT_FOUND);
    }
    // update comment
    const updatedcomment = await CommentService.updateComment(Comment_info);
    // send response
    return response(true,200,updatedcomment,res)
}catch (error) {
  next(error)
  }
}
exports.deleteComment = async (req, res) => {
  try {
    const Comment_id  = req.params;
    const Comment = await CommentService.getComment(Comment_id);
    if (!isExist) {
      throw new ErrorHandler(401,error.NOT_FOUND);
    }
    await CommentService.deleteComment(Comment_id )
    return response(true,200,"deleted",res)
  } catch (error) {
    next(error)
  }
}