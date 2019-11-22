import * as express from 'express';
import * as bodyParser from 'body-parser';
import chalk from 'chalk';
import { createConnection, ConnectionOptions } from 'typeorm';

class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: any, port: number) {
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }

    private initializeControllers(controllers: any) {
        controllers.forEach((controller: any) => {
            this.app.use('/', controller.router);
        });
    }

    public async listen() {
        try {
            await createConnection(config);
        } catch (error) {
            console.log(chalk.red('Error connecting to database', error));
            return error;
        }

        this.app.listen(this.port, () => {
            console.log(chalk.green(`App listening on the port ${this.port}`));
        });
    }
}

const config: ConnectionOptions = {
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
export default App;
