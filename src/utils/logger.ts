import { createLogger, format, transports } from 'winston';

export class Logger {
    logger = createLogger({
        format: format.combine(format.json()),
        transports: [new transports.File({ filename: 'errors.log', level: 'error' })]
    });

    constructor() {
        this.logger = this.logger;
    }
}
