const router = require("express").Router();
const multer = require("multer");

const {Allusers,deleteuser,updateuser,ProfilePicture,Register,signIn}
=require("../controllers/user.controller");


const isAuth = require("../../../Middleware/isAuth");
const isValid = require("../../../Middleware/isValid");
const {RegisterValid,signInValid}= require("../../validation/user.validation");

const upload = require("../../../Middleware/multer.ProfilePic");



router.get("/Allusers",isAuth(),Allusers);
router.put("/updateuser/:id",isAuth(),updateuser);
router.delete("/deleteuser/:id",deleteuser);
router.post("/signIn",isValid(signInValid),signIn)
router.post("/Register",isValid(RegisterValid),Register)
router.post("/ProfilePicture",isAuth(),upload.single("image"),ProfilePicture);

module.exports = router;
