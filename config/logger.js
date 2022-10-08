const winston = require('winston');
const { format, createLogger, transports } = require('winston');
const { timestamp, combine, printf, json } = format;


const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level} : ${message}`
})

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: 'logs.log',
      level: 'error',
      format: combine(json(), logFormat)
    }),
    new transports.Http({
      level: 'warn',
      format: winston.format.json(),
      
    }),
    new transports.Console({
      level: 'info',
      format: combine(
        format.colorize(),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        logFormat,
      ),
    })
  ]
})
module.exports = logger;