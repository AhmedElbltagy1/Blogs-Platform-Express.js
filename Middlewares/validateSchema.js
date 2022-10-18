const joi = require('joi');


const validateSchema = (schema) => {
  
    return (req, res, next) => {
      var validation = [];
      var validationResult = schema.body.validate(req.body);
      if (validationResult.error) {
        validation.push(validationResult.error.details[0].message)
      }
      if (validation.length) {
        return res.status(400).json({
          status: 400,
          message: `Validation : ${validation.join()}`,
        });
      }
      next();
    }
  }
module.exports = validateSchema;
    