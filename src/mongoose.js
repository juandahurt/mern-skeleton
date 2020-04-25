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
    logger.info('database disconnected');
});

mongoose.connection.on('close', () => {
    logger.info('database closed');
});

const connectToDB = async () => {
    try {
        await mongoose.connect(db.uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
    } catch (err) {
        logger.error(err.message);
        process.exit(1);
    }
}

const disconnectDB = async () => {
    try {
        await mongoose.connection.close();
    } catch (err) {
        logger.error(err.message);
        process.exit(1);
    }
}

module.exports = { connectToDB, disconnectDB };