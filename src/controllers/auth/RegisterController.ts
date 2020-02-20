import * as express from 'express';
import * as path from 'path';
import * as jwt from 'jsonwebtoken';
import { JWT_FAILED_MSG, LOGS_FAILED_MSG, REGISTRATION_FAILED_MSG } from './messages';

const JWT_SECRET = String(process.env.JWT_SECRET);

class RegisterController {
    public routepath = '/register';
    public router = express.Router();

    constructor() {
        const { routepath, router, register, verify, logs } = this;
        router.post(`${routepath}`, register);
        router.post(`${routepath}/verify`, verify);
        router.get(`${routepath}/logs`, logs);
    }

    register = async (req: express.Request, res: express.Response) => {
        try {
            const data = jwt.sign({ ...req.body }, JWT_SECRET);
            res.status(200).json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, msg: REGISTRATION_FAILED_MSG });
        }
    };

    verify = async (req: express.Request, res: express.Response) => {
        try {
            const data = jwt.verify(req.body.token, JWT_SECRET);
            res.status(200).json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, msg: JWT_FAILED_MSG });
        }
    };

    logs = async (req: express.Request, res: express.Response) => {
        try {
            const log = path.join('./errors.log');
            res.status(200).download(log);
        } catch (error) {
            res.status(400).json({ success: false, msg: LOGS_FAILED_MSG });
        }
    };
}

export default RegisterController;
