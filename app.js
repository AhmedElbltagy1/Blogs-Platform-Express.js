const express = require("express");
const router = express();
require('dotenv').config();

const multer = require("multer")
router.use(express.json());

const connection = require("./DataBase/Connection")
connection();

const {userRouter,PostsRouter,CommentsRouter}= require("./Router/router")
router.use(userRouter,PostsRouter,CommentsRouter)

router.use('/uploads',express.static('uploads'))

router.get("/",(req,res)=>{
    res.send("hi")
})

const server = router.listen(process.env.PORT);