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
        try {
            const isValid = jwt.verify(x.token, 'password');

            res.json({ isValid });
        } catch (error) {
            res.json({ error: 'Invalid JWT' });
        }
    };

    // Verifies JWT
    // POST: /register/verify
    returnLogs = async (req: express.Request, res: express.Response): Promise<any> => {
        const file = path.join('./errors.log');
        res.download(file);
    };
}

export default RegisterController;
