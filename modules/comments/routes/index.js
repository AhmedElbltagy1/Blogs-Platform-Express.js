const express = require("express");
const app = express.Router()

const commentController = require("../controller/index")
const {CreateCommentSchema,updateCommentSchema} = require("../validation/index"); 
const validateRequest = require("../../../config/validation/validateRequest")



app
.post("/",validateRequest(CreateCommentSchema),commentController.createcomment)
.put("/:id",validateRequest(updateCommentSchema),commentController.updatecomment)
.delete("/:id",commentController.deletecomment)


module.exports = app;