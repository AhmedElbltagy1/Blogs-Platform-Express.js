const PostModel = require("./post.model");





exports.createPost = async (user_id,Post_info) => {
    const post = await PostModel.create({ creator: user_id,...Post_info})
    return post;
}
exports.getPosts = async () =>{
    const posts = await PostModel.find({}).cursor();
    return posts ;
}
exports.getPost = async(post_id) =>{
    const post = await PostModel.findById(post_id)
    return post;
}
exports.deletePost = async(post_id) =>{
    const post = await PostModel.deleteOne({_id:post_id});
    return post;
}
exports.updatePost = async (id,payload) => {
    const post = await PostModel.updateOne({_id:id},payload)
    return post; 
}
