const db = require('./config/database');
const mongoose = require('mongoose');
const logger = require('logger');


/**
 * Opens the Mongoose connection.
 */
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

/**
 * Closes the Mongoose connection.
 */
const disconnectDB = async () => {
    try {
        await mongoose.connection.close();
    } catch (err) {
        logger.error(err.message);
        process.exit(1);
    }
}

module.exports = { connectToDB, disconnectDB };