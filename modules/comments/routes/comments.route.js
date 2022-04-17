const app = require("express").Router();
const Comment = require("../../../DataBase/Models/Comments.model");
const Post = require("../../../DataBase/Models/Posts.model");
const addcomment = require("../controller/Comments.controller");


app.post("/addcomment",addcomment)

module.exports = app
