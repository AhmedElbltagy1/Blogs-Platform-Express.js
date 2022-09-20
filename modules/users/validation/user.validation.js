const joi = require("joi");

    const RegisterSchema ={
        body:joi.object().required().keys({

            name:joi.string().required(),

            email:joi.string().email().required().messages({
                "string.empty":"email is required"
            }),
            password:joi.string().required().messages({
                "string.empty":"Password can not be empty"
            }),
            role:joi.string()
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
        
    const updateUserSchema = {
        params: joi.object().keys({

            id: joi.string().required(),
                }),

                body: joi.object().keys({

                  name: joi.string().optional(),
                  age: joi.number().optional(),
                  email: joi.string().optional(),
                  phone: joi.string().optional()
                }),
            }    
            
module.exports = { loginSchema,RegisterSchema,updateUserSchema }
