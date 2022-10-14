const router = require("express").Router();
const userController= require("./user.controller");
const validateSchema = require("../../Middlewares/validateSchema");
const {loginSchema,RegisterSchema } = require("./user.validation");
const isAuth = require("../../middlewares/is-Auth");
const granted = require("../../middlewares/granted");



router.post("/signin",validateSchema(loginSchema),userController.signin);
router.post("/signup",validateSchema(RegisterSchema),userController.signup);
router.get("/",isAuth(),granted("readAny","users"),userController.getUsers);

module.exports = router;

