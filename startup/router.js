const express = require("express");
const router = express.Router()


const userRoutes = require('../Services/users/user.route');
const PostsRoutes = require('../Services/Posts/post.route');
const commentsRoutes = require('../Services/Posts/post.route');


// Routes Config:
router.use("/users", userRoutes);
router.use("/posts", PostsRoutes);
router.use("/comments",commentsRoutes);

module.exports = router ;