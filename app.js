const express = require("express");
const app = express();
require('dotenv').config();

const multer = require("multer")
app.use(express.json());

const connection = require("./DataBase/Connection")
connection();

const {userRouter,PostsRouter,CommentsRouter}= require("./Router/router")
app.use(userRouter,PostsRouter,CommentsRouter)

app.use('/uploads',express.static('uploads'))

 
const server = app.listen(process.env.PORT);