const express = require("express");
const app = express.Router();

const postController = require("../controller/index");
const isAuthorized = require("../../../config/Authorization/isAuthorized");
const validateRequest = require("../../../config/validation/validateRequest");

const {GET_POSTS,
    GET_POST,
    UPDATE_POST,
    DELETE_POST
 }= require("../endPoint")

app
.get("/",isAuthorized(GET_POSTS),postController.getPosts)
.get("/:id",postController.getPost)
.post("/",postController.addPost)
.put("/:id",isAuthorized(UPDATE_POST),postController.updatePost)
.delete("/:id",isAuthorized(DELETE_POST),postController.deletePost)



module.exports=app