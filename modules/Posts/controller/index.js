const PostModel = require("../model/post.mode")
const CommentModel = require("../../comments/model/comment.model")

exports.getPosts= async (req,res)=>{
  
try {
    const cursor = PostModel.find({}).cursor();
    const count = PostModel.count();
  
    var newComments = [];
    for( let doc = await cursor.next();doc!= null;doc = await cursor.next()){
      const comment = await CommentModel.find({postID:doc._id})
      
      const obj = { ...doc._doc ,comment}
      newComments.push(obj)

    }
        res.status(200).json({
            message:"posts  ",
            data: newComments
        })
} catch (error) {
    res.status(400).json({
        message:"error occur",
        error : error
    })
    
}
}
exports.getPost = async (req,res)=>{
    try {
        const { id } = req.params;
        const post = await PostModel.findById(id);
        if (!post) {
          throw new Error('post not found');
        }
        res.json({
          message: 'Get post success',
          data: post,
        });
      } catch (error) {
        res.status(404).json({
          error: error.message,
        });
      }

}
exports.addPost= async (req,res)=>{
    try {
            const {title,description,picture} = req.body;
            // console.log(req.user.name);
            // const userID = req.user.id;
              // console.log(req.user);
            const post = await PostModel.insertMany({title,description,picture,creator:req.user.id})

            res.status(200).json({
                message:"post created",
                data:post
            })
    } catch (error) {
        res.status(500).json({
            message:"error happen while creating post",
            error:error
        })
        
    }
    

}
exports.deletePost= async (req,res)=>{
    try {
        const { id } = req.params;
        const post = await PostModel.findById(id);
        if (!post) {
          throw new Error('post not found');
        }
        await post.deleteOne({ _id: id });
        res.json({
          message: 'post deleted Successfully',
        });
      } catch (error) {
        res.status(400).json({
          error: error.message,
        });
      }

}
exports.updatePost= async (req,res)=>{
    try {
        const { id } = req.params;
        const updatePayload = req.body;
        const post = await PostModel.findById(id);
        if (!post) {
          throw new Error('post not found');
        }
        const updatedpost= await PostModel.findByIdAndUpdate(id, updatePayload, { new: true,});
    
        res.json({
          message: 'update post success',
          data: updatedpost,
        });
      } catch (error) {
        res.status(404).json({
          error: error.message,
        });
      }

}