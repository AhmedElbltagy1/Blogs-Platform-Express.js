const joi = require("joi");

    const RegisterSchema ={
        body:joi.object().required().keys({
            name:joi.string().required(),
            email:joi.string().email().required().messages
            ({
                "string.empty" : "email is required"
            }),
            password:joi.string().required().messages({
                "string.empty":"Password can not be empty"
            }),
            role:joi.string().optional()
        })
    }
    const loginSchema = {
            
        body:joi.object().required().keys({
            email:joi.string().required().messages({
                "string.empty":"email can not be empty"
            }),
            password:joi.string().required().messages({
                "string.empty":"Password can not be empty"
            }),
            })
        }       
module.exports = { loginSchema,RegisterSchema}
