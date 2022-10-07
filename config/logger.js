const winston = require('winston');
const {format}=require('winston');

const logger = winston.createLogger({
    transports: [
      new winston.transports.Console({

      }),
      new winston.transports.File({
        format: format.json(),
        filename: 'info.log' ,
        level:'info'
        })
    ]
  });
  module.exports = logger;