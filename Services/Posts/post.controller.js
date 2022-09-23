const CommentModel = require('../comments/comment.model');
const PostModel = require('./post.model');
const PostService = require('./post.service');
const { ErrorHandler } = require('../../utils/error');
const error = require('../../utils/errors');


exports.getPosts = async (req, res,next) => {
  try {
    const cursor =await PostService.getPosts();
    const count =await PostService.count();

    var newComments = [];
    for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
      const comment = await CommentModel.find({ postID: doc._id })

      const obj = { ...doc._doc, comment }
      newComments.push(obj)
    }
    res.status(200).json({
      message: "posts  ",
      data: newComments
    })
  } catch (error) {
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
    res.json({
      message: 'Get post success',
      data: isExist,
    });
  } catch (error) {
    next(error)
  }
}
exports.CreatePost = async (req, res,next) => {
  try {
    const Post_info = req.body;
    const post = await PostService.createPost(Post_info)
    res.status(200).json({ message: "post created", post })
  } catch (error) {
    next(error);
  }
}
exports.deletePost = async (req, res,next) => {
  try {
    const id = req.params;
    const isExist = await PostService.getPost(id);
    if (!isExist) {
      throw new ErrorHandler(401, error.NOT_FOUND);
    }
    if (req.user.id == isExist.id) {
      await PostService.deletePost(id)
    }
    res.json({
      message: 'post deleted Successfully',
    });
  } catch (error) {
    next(error)
  }
}
exports.updatePost = async (req, res, next) => {
  try {
    const post_id = req.params;
    const Post_info = req.body;
   
    const isExist = await PostService.getPost(post_id)
    if (!isExist) {
      throw new ErrorHandler(401,error.NOT_FOUND);
    }
      const updatedpost = await PostService.updatePost(Post_info)
      res.json({
        message: 'update post success',
        data: updatedpost,
      });
  } catch (error) {
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