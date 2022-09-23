const express = require("express");
const router = express.Router()

const commentController = require("./comment.controller");

const {CreateCommentSchema,updateCommentSchema} = require("./comment.validation"); 

const validateSchema = require("../../Middlewares/validateSchema")




router.post("/",validateSchema(CreateCommentSchema),commentController.CreateComment)
router.put("/:id",validateSchema(updateCommentSchema),commentController.updatecomment)
router.delete("/:id",commentController.deletecomment)


module.exports = router;