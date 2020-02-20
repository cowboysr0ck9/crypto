import { createLogger, format, transports } from 'winston';

import * as path from 'path';

export class Logger {
    logger = createLogger({
        format: format.json(),
        transports: [new transports.File({ filename: path.join(__dirname, 'logs', `/${'test'}.log`), level: 'error' })]
    });

    constructor() {
        this.logger = this.logger;
    }
}
