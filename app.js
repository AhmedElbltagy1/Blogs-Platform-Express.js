const express = require("express");
require('dotenv').config();
const multer = require('multer');

const app = express();
app.use(express.json());

//DataBase Connection
require("./config/databases/db")();


const userRoutes = require('./modules/users/routes/index');
const AuthRoutes = require('./modules/users/routes/auth')
const PostsRoutes = require('./modules/Posts/routes/index');
const commentsRoutes = require('./modules/comments/routes/index');


app.use("/users", userRoutes);
app.use("/users/Auth",AuthRoutes);
app.use("/posts", PostsRoutes);
app.use("/comments",commentsRoutes);

app.use('/images', express.static('images'))

app.listen(process.env.PORT)