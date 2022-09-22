const CommentModel = require("./comment.model")


exports.createcomment = async (req,res)=>{
    try {
        const { content , postID, createdBy } = req.body;        
        const newComment = await CommentModel.insertMany({content,postID,createdBy})
        res.status(200).json({
                message:"added",
                newComment
    })
    } catch (error) {
        console.log(error);
        res.send(error)
        
    }
    
}
exports.updatecomment =async (req,res)=>{
    try {
        const { id } = req.params;
        const updatePayload = req.body;
        const comment = await CommentModel.findById(id);
        if (!comment) {
          throw new Error('comment not found');
        }
        const updatedcomment = await CommentModel.findByIdAndUpdate(id, updatePayload, {
          new: true,
        });
        res.json({
          message: 'update comment success',
          data: updatedcomment,
        });
      } catch (error) {
        res.status(404).json({
          error: error.message,
        });
      }
    

}
exports.deletecomment = async (req,res)=>{
    try {
        const { id } = req.params;
        const Comment = await CommentModel.findById(id);
        if (!Comment) {
          throw new Error('Comment not found');
        }
        await CommentModel.deleteOne({ _id: id });
        res.json({
          message: 'Comment deleted Successfully',
        });
      } catch (error) {
        res.status(400).json({
          error: error.message,
        });
      }

}