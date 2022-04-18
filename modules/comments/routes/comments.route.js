const app = require("express").Router();
const {addcomment,updateComment} = require("../controller/Comments.controller");


app.post("/addcomment",addcomment)
app.put("/updateComment/:id",updateComment)

module.exports = app
