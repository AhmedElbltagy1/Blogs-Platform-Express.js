const express = require("express");
const router = express.Router()


const userRoutes = require('../modules/users/user.route');
const PostsRoutes = require('../modules/Posts/post.route');
const commentsRoutes = require('../modules/Posts/post.route');


// Routes Config:
router.use("/users", userRoutes);
router.use("/posts", PostsRoutes);
router.use("/comments",commentsRoutes);

module.exports = router ;