const express = require("express");
const router = express.Router();
const multer = require('multer')

const postController = require("../controller/index");

const isAuthorized = require("../../../config/Authorization/isAuthorized");

const validateSchema = require("../../../config/validation/validateSchema");

const {updatepostSchema,CreatepostSchema} = require("../validation/index");

const { UPDATE_POST, DELETE_POST, CREATE_POST }= require("../endPoint")

const upload = require('../../../upload/imageUpload')

router.get("/",postController.getPosts);

router.get("/:id",postController.getPost);

router.post("/",isAuthorized(CREATE_POST),validateSchema(CreatepostSchema),postController.CreatePost);

router.put("/:id",isAuthorized(UPDATE_POST),validateSchema(updatepostSchema),postController.updatePost);

router.delete("/:id",isAuthorized(DELETE_POST),postController.deletePost);

router.put("/upload/:id",upload.single("image"),postController.uploadImage);


module.exports=router