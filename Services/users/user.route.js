const router = require("express").Router();

const userController= require("./user.controller");

const isAuthorized = require("../../Middlewares/isAuthorized");

const validateSchema = require("../../Middlewares/validateSchema");

const {loginSchema,RegisterSchema } = require("./user.validation");

const { GET_USERS,GET_USER,UPDATE_USER,DELETE_USER } = require("./endPoint");



router.post("/signin",validateSchema(loginSchema),userController.signin)

router.post("/signup",validateSchema(RegisterSchema),userController.signup)
 
router.get("/:id",isAuthorized(GET_USER),userController.getUser)

router.get("/",isAuthorized(GET_USERS),userController.getUsers)

router.put("/:id",isAuthorized(UPDATE_USER),userController.updateUser)

router.delete("/:id",isAuthorized(DELETE_USER),userController.deleteUser)


module.exports = router;
