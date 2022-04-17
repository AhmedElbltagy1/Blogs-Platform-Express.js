const app = require("express").Router();
const {Allusers,deleteuser,updateuser}= require("../controllers/user.controller");
const {isAuth,isValid,signInValid,RegisterValid,signIn,Register}= require("../usersRouter/users.Router")
const upload = require("../../../Middleware/multer.ProfilePic");
const multer = require("multer");
const ProfilePicture = require("../controllers/profileImage.controller");



app.get("/Allusers",isAuth(),Allusers);

app.put("/updateuser/:id",isAuth(),updateuser);

app.delete("/deleteuser/:id",deleteuser);

app.post("/signIn",isValid(signInValid),signIn)

app.post("/Register",isValid(RegisterValid),Register)

app.post("/ProfilePicture",isAuth(),upload.single("image"),ProfilePicture);

module.exports = app;
