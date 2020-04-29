/**
 * Main module.
 */

const { config } = require('./config');
const app = require('./express');
const logger = require('logger');

app.listen(config.port, config.host, () => {
    logger.info(`server started: listening on http://${config.host}:${config.port}`);
}).on('error', function(err) {
    logger.error(err);
});