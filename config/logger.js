const { format, createLogger, transports } = require('winston');
const { timestamp, combine, printf ,json} = format;

function buildLogger () {
  const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level} : ${message}`
  })

  return createLogger({
    format: combine(
      format.colorize(),
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      // logFormat,
      json()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
      new transports.Console()
    ],
  });
}

module.exports = buildLogger;