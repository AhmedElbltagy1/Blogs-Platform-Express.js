const router = require("express").Router();
const multer = require("multer");
const isAuth = require("../../../Middleware/isAuth");
const {CreatePost,getSinglePost,updatePost,deletePost,GetPosts}= require("../controllers/Posts.controller");


const upload = require("../../../Middleware/multer.Postimages");

router.get("/Posts",GetPosts);
router.get("/SinglePost/:id",getSinglePost)
router.post("/addPost",upload.single("Postimage"),isAuth(),CreatePost);
router.put("/updatePost/:id",isAuth(),upload.single("Postimage"),updatePost);
router.delete("/deletePost/:id",isAuth(),deletePost);

module.exports = router;
