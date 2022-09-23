const PostModel = require("./post.model");


exports.createPost = async (payload) => {
    const post = await PostModel.insertMany(payload);
    return post;
}
exports.getPosts = async () =>{
    const posts = await PostModel.find({}).cursor();
    const count = PostModel.count();
    return posts ,count ;
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
exports.uploadimage = async (post_id) => {
    return await PostModel.updateOne({post_id},{
        $set: {
            image: `localhost:3000/${req.file.path}`,
            },
    })
}
