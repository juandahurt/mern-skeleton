/**
 * DB connection events
 */

const db = require('./config/database');
const mongoose = require('mongoose');
const logger = require('logger');


mongoose.connection.on('connected', () => {
    logger.info('database connected');
});

mongoose.connection.on('reconnected', () => {
    logger.info('database connection re-established');
});

mongoose.connection.on('disconnected', () => {
    logger.error('database disconnected');
});

mongoose.connection.on('close', () => {
    logger.error('database closed');
});

const connect = async () => {
    await mongoose.connect(db.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
}

module.exports = connect;