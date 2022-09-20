const express = require("express");
const router = express.Router();
const multer = require('multer')

const postController = require("../controller/index");


const validateSchema = require("../../../config/validation/validateSchema");

const {updatepostSchema,CreatepostSchema} = require("../validation/index");



const upload = require('../../../upload/imageUpload')

router.get("/",postController.getPosts);

router.get("/:id",postController.getPost);

router.post("/",validateSchema(CreatepostSchema),postController.CreatePost);

router.put("/:id",validateSchema(updatepostSchema),postController.updatePost);

router.delete("/:id",postController.deletePost);

router.post("/upload",upload.single("image"),postController.uploadImage);


module.exports=router