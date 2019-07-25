import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import * as jwt from 'jsonwebtoken';
import { Logger } from '../../utils/logger';
import winston = require('winston');

class RegisterController {
    public path = '/register';
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        const { path, router, ...x } = this;
        router.get(`${path}`, x.register);
        router.post(`${path}/verify`, x.verify);
        router.get(`${path}/returnlogs`, x.returnLogs);
    }

    // Creates JWT Token
    // GET: /register
    register = async (req: express.Request, res: express.Response) => {
        const user = { id: 1, userName: 'test', role: 'analyst', department: 'Back Office' };
        const token = jwt.sign(user, 'password');

        const morgan = new Logger();
        morgan.logger.log({
            level: 'error',
            message: `What time is the testing at? ${Date.now()}`,
            token,
            user
        });

        res.json({ token });
    };

    // Verifies JWT
    // POST: /register/verify
    verify = async (req: express.Request, res: express.Response) => {
        const { ...x } = req.body;
        const isValid = jwt.verify(x.token, 'password');

        res.json({ isValid });
    };

    // Verifies JWT
    // POST: /register/verify
    returnLogs = async (req: express.Request, res: express.Response): Promise<any> => {
        const test = await fs.readFile('../auth/LoginController.ts', (err, data) => {
            console.log(err, data);
        });

        // const file = path.join(__dirname, '../../logs/test.txt');
        const file = path.join(__dirname, '../../../errors.log');
        fs.readFile(file, { encoding: 'utf-8' }, function(err, data) {
            if (!err) {
                console.log(data);
            } else {
                console.log(err);
            }
        });

        res.sendFile(file);
    };
}

export default RegisterController;
