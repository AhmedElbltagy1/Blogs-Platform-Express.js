require('dotenv').config()
const express = require("express");
const app = express();
const Port = process.env.PORT

//DataBase Connection
require("./config/databases/db")();

app.use(express.json());


const userRoutes = require("./modules/users/routes/index");
const PostsRoutes = require("./modules/Posts/routes/index");
const commentsRoutes = require("./modules/comments/routes/index")

app.use("/users", userRoutes);
app.use("/posts", PostsRoutes);
app.use("/comments",commentsRoutes);

app.listen(Port,()=>{
    console.log(`server is listen on port ${Port}`);
})