const express = require("express");
const router = express.Router();
const multer = require('multer')
const postController = require("./post.controller");
const validateSchema = require("../../Middlewares/validateSchema");
const {updatepostSchema,CreatepostSchema} = require("./post.validation");
const upload = require('../../upload/imageUpload');
const granted = require('../../middlewares/granted');
const isAuth = require('../../middlewares/is-Auth');

router.get("/",isAuth(),granted("readOwn","posts"),postController.getPosts);
router.post("/create",isAuth(),granted("createOwn","posts"),postController.createPost);
router.delete("/:id",isAuth(),granted("deleteOwn","posts"),postController.deletePost);
router.put("/upload/:id",upload.single("image"),postController.uploadImage);
router.put("/:id",validateSchema(updatepostSchema),postController.updatePost);

module.exports=router