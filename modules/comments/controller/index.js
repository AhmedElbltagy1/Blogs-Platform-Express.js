const CommentModel = require("../model/comment.model")


exports.createcomment = async (req,res)=>{
    try {
        const { content , postID,createdBy } = req.body;        
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
exports.updatecomment =(req,res)=>{
    

}
exports.deletecomment =(req,res)=>{

}