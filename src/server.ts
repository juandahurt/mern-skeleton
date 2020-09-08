/**
 * Main module.
 */

import { config } from './config';
import { Express } from './express'

// @ts-ignore
import logger from '@juandahurt_t/logger';

class Server {
    static run() {
        let express = new Express()
        express.app.listen(config.port, config.host, () => {
            logger.info(`server started: listening on http://${config.host}:${config.port}`);
        }).on('error', function(err: any) {
            logger.error(err);
            process.exit()
        });
    }
}

Server.run()