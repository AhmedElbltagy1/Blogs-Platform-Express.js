const PostModel = require("./post.model");
const path = require('path');

exports.createPost = async (postCreator,postInfo) => {
    const post = await PostModel.insertMany({creator:postCreator,title:postInfo.title,description:postInfo.description});
    return post;
}
exports.getPosts = async () =>{
    const posts = await PostModel.find({}).cursor();
    return posts ;
}
exports.getPost = async(post_id) =>{
    const post = await PostModel.findOne({post_id});
    return post;
}
exports.deletePost = async(post_id) =>{
    const post = await PostModel.deleteOne(post_id);
    return post;
}
exports.updatePost = async (payload) => {
    const post = await PostModel.updateOne(payload)
    return post; 
}
