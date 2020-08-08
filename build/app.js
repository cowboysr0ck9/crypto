"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express = require("express");
const bodyParser = require("body-parser");
const chalk_1 = require("chalk");
const typeorm_1 = require("typeorm");
class App {
    constructor(controllers, port) {
        this.app = express();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }
    initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }
    listen() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield typeorm_1.createConnection(config);
            }
            catch (error) {
                console.log(chalk_1.default.red('Error connecting to database', error));
                return error;
            }
            this.app.listen(this.port, () => {
                console.log(chalk_1.default.green(`App listening on the port ${this.port}`));
            });
        });
    }
}
const config = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [__dirname + './src/models*.entity{.ts,.js}'],
    synchronize: true,
    ssl: true
};
exports.default = App;
//# sourceMappingURL=app.js.map