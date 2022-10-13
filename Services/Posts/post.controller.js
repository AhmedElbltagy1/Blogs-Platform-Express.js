const CommentModel = require('../comments/comment.model');
const PostModel = require('./post.model');
const PostService = require('./post.service');
const { ErrorHandler } = require('../../utils/error');
const response = require('../../utils/response');
const error = require('../../utils/errors');


exports.getPosts = async (req, res,next) => {
try{
    const cursor = await PostService.getPosts();
    var newComments = [];
    for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
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
  try {
    const id = req.params;
    const isExist = await PostService.getPost(id)
    if (!isExist) {

      throw new ErrorHandler(401, error.NOT_FOUND);
    }
    return response(true,200,isExist,res)
  } catch (error) {
    next(error)
  }
}

exports.createPost = async (req, res,next) => {
try {
    const postInfo = req.body;
    const postCreator = req.user.payload.user_id;
    // create post 
    const post = await PostService.createPost(postCreator,postInfo)
    // send response
    return response(true,200,post,res)
}catch (error) {
    next(error);
  }
}

exports.deletePost = async (req, res, next) => {
try {
    const id = req.params;
    // find the post
    const isExist = await PostService.getPost(id);
    // check that the requester is the creator of the post
    if (req.user.payload.user_id == isExist.id) {
    // delete the post 
    await PostService.deletePost(id)
    // send the response 
    return response(true,200,"delete successfully",res)
    }
    // throw error if post not found
    throw new ErrorHandler(400,error.NOT_FOUND)
}catch (error) {
    next(error)
  }
}
exports.updatePost = async (req, res, next) => {
try {
    const post_id = req.params;
    const Post_info = req.body;
    // find the post 
    const isExist = await PostService.getPost(post_id)
    // check that the requester is the creator of the post
    if (req.user.payload.user_id == isExist.id) {
    // update the post
    const updatedpost = await PostService.updatePost(Post_info)
    // send the response
    return response(true,200,updatedpost,res)
    }
    // throw error if the post not found
    throw new ErrorHandler(401,error.NOT_FOUND);
}catch (error) {
    next(error);
  }
}
exports.uploadImage = async ( req, res , next) => {
  try {
    const post_id = req.params.id;
    const post =await PostModel.updateOne({ _id: post_id }, {
      $set: {
        image: `localhost:3000/${req.file.path}`,
      },
    })
    res.json({message:"post is updated",data: post });
  } catch (error) {
    next(error)
  }

}