const PostModel = require("./post.model")
const CommentModel = require('../comments/comment.model')
const PostService = require('./post.service');

exports.getPosts = async (req, res) => {

  try {
    const cursor = PostService.getPosts();
    const count = PostService.count();

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
    res.status(400).json({
      message: "error occur",
      error: error
    })

  }
}
exports.getPost = async (req, res) => {
  try {
    const id = req.params;
    const isExist = await PostService.getPost(id)
    if (!isExist) {

      throw new Error('post not found');
    }
    res.json({
      message: 'Get post success',
      data: isExist,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }

}
exports.CreatePost = async (req, res) => {
  try {
    const Post_info = req.body;

    const post = await PostService.createPost(Post_info)
    res.status(200).json({
      message: "post created",
      post
    })
  } catch (error) {
    res.status(500).json({
      message: "error happen while creating post",
      error
    })
  }
}
exports.deletePost = async (req, res) => {
  try {
    const id = req.params;
    const isExist = await PostService.getPost(id);
    if (!isExist) {
      throw new Error('post not found');
    }
    if (req.user.id == isExist.id) {
      await PostService.deletePost(id)
    }
    res.json({
      message: 'post deleted Successfully',
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }

}
exports.updatePost = async (req, res) => {
  try {
    const post_id = req.params;
    const Post_info = req.body;
    const isExist = await PostService.getPost(post_id)
    if (!isExist) {
      throw new Error('post not found');
    }
    if (req.user.id == isExist.id) {
      const updatedpost = await PostService.updatePost(Post_info)
      res.json({
        message: 'update post success',
        data: updatedpost,
      });
    }
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }

}
exports.uploadImage = async (req, res) => {
  try {
    const postID = req.params.id
    await PostModel.updateOne({ _id: postID }, {
      $set: {
        photo: `localhost:3000/${req.file.path}`,
      },
    })
    res.send("post is updated");
  } catch (error) {
    console.log(error);
    res.json({ message: error })
  }

}