const router = require("express").Router();

const userController= require("../controllers/index");

const isAuthorized = require("../../../config/Authorization/isAuthorized");

const validateSchema = require("../../../config/validation/validateSchema");

const { updateUserSchema } = require("../validation/user.validation");

const { GET_USERS,GET_USER,UPDATE_USER,DELETE_USER } = require("../endPoint");

const authRoutes = require('./auth');

 
 
 router.get("/:id",isAuthorized(GET_USER),userController.getUser)

 router.get("/",isAuthorized(GET_USERS),userController.getUsers)

 router.put("/:id",isAuthorized(UPDATE_USER),validateSchema(updateUserSchema),userController.updateUser)

 router.delete("/:id",isAuthorized(DELETE_USER),userController.deleteUser)


module.exports = router;
