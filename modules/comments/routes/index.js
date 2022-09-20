const express = require("express");
const app = express.Router()

const commentController = require("../controller/index")
const {CreateCommentSchema,updateCommentSchema} = require("../validation/index"); 
const validateSchema = require("../../../config/validation/validateSchema")



app
.post("/",validateSchema(CreateCommentSchema),commentController.createcomment)
.put("/:id",validateSchema(updateCommentSchema),commentController.updatecomment)
.delete("/:id",commentController.deletecomment)


module.exports = app;