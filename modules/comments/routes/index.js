const express = require("express");
const app = express.Router()

const commentController = require("../controller/index")
const isAuthorized = require("../../../config/Authorization/isAuthorized")

app
.post("/",commentController.createcomment)
.put("/:id",commentController.updatecomment)
.delete("/:id",commentController.deletecomment)


module.exports = app;