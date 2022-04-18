const Comment = require("../../../DataBase/Models/Comments.model");


const addcomment =  async (req, res) => {
    let { content, createdBy, Postid } = req.body;
    const newComment = new Comment({ content, createdBy, Postid })
    const result = await newComment.save();
    res.send("addedd");
}


module.exports = {addcomment};