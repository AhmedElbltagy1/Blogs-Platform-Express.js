const app = require("express").Router();
const userController= require("../controllers/index");

const isAuthorized = require("../../../config/Authorization/isAuthorized")
const validateRequest = require("../../../config/validation/validateRequest")

const {
   loginSchema,RegisterationSchema,updateUserSchema
      } = require("../validation/user.validation");

 const {
    GET_USERS,GET_USER,UPDATE_USER,DELETE_USER
 } = require("../endPoint");
 
 app
.get("/:id",isAuthorized(GET_USER),userController.getUser)
.get("/",isAuthorized(GET_USERS),userController.getUsers)
.put("/:id",isAuthorized(UPDATE_USER),validateRequest(updateUserSchema),userController.updateUser)
.delete("/:id",isAuthorized(DELETE_USER),userController.deleteUser)
.post("/login",validateRequest(loginSchema),userController.login)
.post("/register",validateRequest(RegisterationSchema),userController.register)



module.exports = app;
