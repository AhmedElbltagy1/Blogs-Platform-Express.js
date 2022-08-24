require('dotenv').config()
const express = require("express");
const app = express();
const Port = process.env.PORT

//DataBase Connection
require("./config/databases/db")();

app.use(express.json());
const PostsRoutes = require("./modules/Posts/routes/index")
const userRoutes = require("./modules/users/routes/index");

app.use("/users", userRoutes);
app.use("/posts", PostsRoutes);
app.listen(Port,()=>{
    console.log(`server is listen on port ${Port}`);
})