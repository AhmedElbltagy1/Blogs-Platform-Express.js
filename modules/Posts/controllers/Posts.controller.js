const Post = require("../../../DataBase/Models/Posts.model");
const Comment = require("../../../DataBase/Models/Comments.model");




const getPosts =async (req,res)=>{
        const newComments =[]; //the comments of the Post
        const cursor = Post.find({}).cursor();
        for(let doc= await cursor.next();doc!=null;doc=await cursor.next()){
            const comment =await Comment.find({PostId:doc._id});
            const obj ={...doc._doc,comment}
            newComments.push(obj) 
        }
   res.json({message:"getPost",newComments})
}

const getSinglePost =async(req,res)=>{
    const { id } = req.params;
    const newComments =[]; //the comments of the Post
    let doc = await Post.findById(id);
    const comment =await Comment.find({PostId:doc._id});
    const obj ={...doc._doc,comment}
    newComments.push(obj)
    res.json({message:"Done",newComments})

}

const CreatePost =async(req,res)=>{
    const {title,description} = req.body
    let imageUrl = process.env.imageURl+req.file.filename ;
    const data =await Post.insertMany({title,description,userId:req.user.id,postImage:imageUrl})
    res.json({message:"added"})
}
const updatePost = async(req,res)=>{
    const{id} = req.params; 
    let selectedPost = await Post.findById(id)

    if (selectedPost.userId == req.user.id) {
        let imageUrl = process.env.imageURl+req.file.filename ;
        let post = await Post.findByIdAndUpdate(id,
            {title:req.body.title,description:req.body.description,postImage:imageUrl})
        res.json({message:"Blog updated",post})

    }else{
        res.json({message:"only the creator of the Post who can updated"})
    }
    
}
const deletePost =async (req,res)=>{
    const {id} = req.params ;
    let selectedPost = await Post.findById(id)

    if (selectedPost.userId == req.user.id) {
        let selectedPost =await Post.deleteOne({id})
    res.json({message:"Post deleted"})
    }else{
        res.json({message:"only the creator of the Post who can deleted"})
    }
    
}


module.exports = {getPosts,getSinglePost,CreatePost,updatePost,deletePost};
