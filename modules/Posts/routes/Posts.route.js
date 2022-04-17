const app = require("express").Router();
const multer = require("multer");
const isAuth = require("../../../Middleware/isAuth");
const {CreatePost,getSinglePost,updatePost,deletePost,getPosts}= require("../controllers/Posts.controller");


const upload = require("../../../Middleware/multer.Postimages");

app.get("/Posts",getPosts);
app.get("/SinglePost/:id",getSinglePost)
app.post("/addPost",upload.single("Postimage"),isAuth(),CreatePost);
app.put("/updatePost/:id",isAuth(),upload.single("Postimage"),updatePost);
app.delete("/deletePost/:id",isAuth(),deletePost);

module.exports = app;
