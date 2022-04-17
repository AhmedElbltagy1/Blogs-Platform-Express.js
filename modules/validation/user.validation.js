const joi = require("joi");


module.exports={
    RegisterValid:{
        body:joi.object().required().keys({
            name:joi.string().required(),
            email:joi.string().email().required().messages({
                "string.empty":"email can not be empty"
            }),
            password:joi.string().required().messages({
                "string.empty":"Password can not be empty"
            }),
            role:joi.string(),
            
        })

    },
    signInValid:{
        body:joi.object().required().keys({
            
            email:joi.string().required().messages({
                "string.empty":"email can not be empty"
            }),
            password:joi.string().required().messages({
                "string.empty":"Password can not be empty"
            }),
            
        })

        

    }
}
