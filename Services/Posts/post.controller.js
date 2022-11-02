const CommentModel = require('../comments/comment.model');
const PostModel = require('./post.model');
const PostService = require('./post.service');
const { ErrorHandler } = require('../../utils/error');
const response = require('../../utils/response');
const error = require('../../utils/errors');




exports.getPosts = async (req, res,next) => {
try{
    const Postscursor = await PostService.getPosts();
    var newComments = []; // posts comments

    for (let doc = await Postscursor.next(); doc != null; doc = await Postscursor.next()) {
      // find comments on each post
      const comment = await CommentModel.find({ postID: doc._id })

      const obj = { ...doc._doc, comment }
      newComments.push(obj)
    } 
    response(true,200,{newComments},res)
}catch (error) {
    next(error)
  }
}

exports.getPost = async (req, res,next) => {
try{
    const id = req.params.id;
    const isExist = await PostService.getPost(id)
    if (!isExist) {
      throw new ErrorHandler(401, error.NOT_FOUND);
    }
    return response(true,200,isExist,res)
}catch (error) {
    next(error)
  }
}

exports.createPost = async (req, res,next) => {
try {
  const post_info = req.body;
  const user_id = req.user.user_id;
  // creating post 
  const post = await PostService.createPost(user_id,post_info);
  return response(true,200,post,res);
}catch (error) {
    next(error);
  }
}

exports.deletePost = async (req, res, next) => {
try {
    const id = req.params.id;
    // find the post
    const isExist = await PostService.getPost(id);
    // check that the requester is the creator of the post
    if (req.user.user_id == isExist.creator) {
    // // delete the post 
    await PostService.deletePost(id)
    // send the response 
    return response(true,200,"delete successfully",res)
     }
    // throw error if post not found
    throw new ErrorHandler(400,error.NOT_AUTHORIZED)
}catch (error) {
    next(error)
  }
}
exports.updatePost = async (req, res, next) => {
try {
    const post_id = req.params.id;
    const Post_info = req.body;
    // find the post 
    const isExist = await PostService.getPost(post_id);
    // check that the requester is the creator of the post
    if (req.user.user_id == isExist.id) {
    // update the post
    const updatedpost = await PostService.updatePost(post_id,Post_info)
    // send the response
    return response(true,200,updatedpost,res)
    }
    // throw error if the post not found
    throw new ErrorHandler(401,error.NOT_AUTHORIZED);
}catch (error) {
    next(error);
  }
}

exports.uploadImage =async (req,res,next) => {
try {
    const id = req.params.id;
    const updated = await PostModel.updateOne({ _id: id },
      {
        $set: {
          imageUrl: `localhost:3002/${req.file.path}`,
        },
      }
    );
    return response(true,200,updated,res)
} catch (error) {
    next(error)
}
}