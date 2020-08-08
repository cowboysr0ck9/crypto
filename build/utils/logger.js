"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const path = require("path");
class Logger {
    constructor() {
        this.logger = winston_1.createLogger({
            format: winston_1.format.json(),
            transports: [new winston_1.transports.File({ filename: path.join(__dirname, 'logs', `/${'test'}.log`), level: 'error' })]
        });
        this.logger = this.logger;
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map