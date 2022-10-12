const router = require("express").Router();
const userController= require("./user.controller");
const is_Auth = require("../../Middlewares/is-Auth");
const validateSchema = require("../../Middlewares/validateSchema");
const {loginSchema,RegisterSchema } = require("./user.validation");
const { GET_USERS,GET_USER,UPDATE_USER,DELETE_USER } = require("./endPoint");


router.post("/signin",validateSchema(loginSchema),userController.signin)
router.post("/signup",validateSchema(RegisterSchema),userController.signup)
 
// router.get("/:id",is_Auth(GET_USER),userController.getUser);

// router.get("/",is_Auth(GET_USERS),userController.getUsers);

// router.put("/:id",is_Auth(UPDATE_USER),userController.updateUser)

// router.delete("/:id",is_Auth(DELETE_USER),userController.deleteUser)
module.exports = router;

