const isAuth = require("../../../Middleware/isAuth")
const isValid = require("../../../Middleware/isValid");
const {RegisterValid,signInValid}= require("../../validation/user.validation")
const signIn = require("../controllers/signIn.controller");
const Register= require("../controllers/register.controller")


module.exports = {isAuth,isValid,RegisterValid,signInValid,signIn,Register}