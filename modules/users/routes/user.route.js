const router = require("express").Router();

const {Allusers,deleteuser,updateuser
    ,ProfilePicture,Register,signIn
}= require("../controllers/user.controller");

const {isAuth,isValid,signInValid,RegisterValid}= require("../users.router");

const upload = require("../../../Middleware/multer.ProfilePic");

const multer = require("multer");

router.get("/Allusers",isAuth(),Allusers);

router.put("/updateuser/:id",isAuth(),updateuser);

router.delete("/deleteuser/:id",deleteuser);

router.post("/signIn",isValid(signInValid),signIn)

router.post("/Register",isValid(RegisterValid),Register)

router.post("/ProfilePicture",isAuth(),upload.single("image"),ProfilePicture);

module.exports = router;
