const PostModel = require("../model/post.mode")

exports.getPosts= async (req,res)=>{
try {
    const posts = await PostModel.find();
    const count = await PostModel.count();
        res.status(200).json({
            message:"posts  ",
            data: {posts,count}
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
            const payload = req.body
            const post = await PostModel.insertMany(payload)
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