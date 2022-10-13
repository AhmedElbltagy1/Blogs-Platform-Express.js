const router = require("express").Router();
const userController= require("./user.controller");
const is_Auth = require("../../Middlewares/is-Auth");
const validateSchema = require("../../Middlewares/validateSchema");
const {loginSchema,RegisterSchema } = require("./user.validation");



router.post("/signin",validateSchema(loginSchema),userController.signin)
router.post("/signup",validateSchema(RegisterSchema),userController.signup)

module.exports = router;

