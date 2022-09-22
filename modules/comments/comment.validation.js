const joi = require("joi");


const CreateCommentSchema = {

    body: joi.object().required().keys({

        content:joi.string().required(),
    })
}
const updateCommentSchema = { 
    params: joi.object().keys({

        id: joi.string().required(),
            }),

            body: joi.object().keys({

              content: joi.string().optional(),
              
            }),
}
module.exports={ updateCommentSchema,CreateCommentSchema}
