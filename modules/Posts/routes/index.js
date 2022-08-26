const express = require("express");
const app = express.Router();

const postController = require("../controller/index");
const isAuthorized = require("../../../config/Authorization/isAuthorized");
const validateRequest = require("../../../config/validation/validateRequest");
const {updatepostSchema,CreatepostSchema} = require("../validation/index");

const {
    UPDATE_POST,
    DELETE_POST,
    CREATE_POST
 }= require("../endPoint")

app
.get("/",postController.getPosts)
.get("/:id",postController.getPost)
.post("/",isAuthorized(CREATE_POST),validateRequest(CreatepostSchema),postController.addPost)
.put("/:id",isAuthorized(UPDATE_POST),validateRequest(updatepostSchema),postController.updatePost)
.delete("/:id",isAuthorized(DELETE_POST),postController.deletePost)



module.exports=app