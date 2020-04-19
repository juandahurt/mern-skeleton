const { createLogger, format, transports } = require('winston');

const customFormat = format.printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
    transports: [
        new transports.Console()
    ],
    format: format.combine(
        format.label({label: process.env.HOST || 'localhost'}),
        format.timestamp({format: 'YY-MM-DD HH:mm:ss'}),
        format.colorize(),
        customFormat
    )
});

module.exports = logger;