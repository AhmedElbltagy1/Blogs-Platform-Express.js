const app = require("express").Router();
const addcomment = require("../controller/Comments.controller");


app.post("/addcomment",addcomment)


module.exports = app
