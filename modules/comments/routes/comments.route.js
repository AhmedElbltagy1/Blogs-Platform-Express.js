const router = require("express").Router();
const addcomment = require("../controller/Comments.controller");


router.post("/addcomment",addcomment)


module.exports = router
