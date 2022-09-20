const router = require('express').Router();

const {RegisterSchema ,loginSchema} = require("../validation/user.validation");

const validateSchema = require("../../../config/validation/validateSchema")

const userController= require("../controllers/auth");



router.post("/login",validateSchema(loginSchema),userController.login)


router.post("/register",validateSchema(RegisterSchema),userController.register)



module.exports = router;