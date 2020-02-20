import * as express from 'express';
import { LOGIN_SUCCESS_MSG, LOGIN_FAILURE_MSG } from './messages';
class LoginController {
    public path = '/login';
    public router = express.Router();

    constructor() {
        const { path, router, login, check } = this;
        router.get(`${path}`, login);
        router.get(`${path}/check/:id`, check);
    }

    login = async (req: express.Request, res: express.Response) => {
        try {
            res.status(200).json({ success: true, data: LOGIN_SUCCESS_MSG });
        } catch (error) {
            res.status(400).json({ success: false, msg: LOGIN_FAILURE_MSG });
        }
    };

    check = async (req: express.Request, res: express.Response) => {
        try {
            res.status(200).json({ success: true, data: LOGIN_SUCCESS_MSG });
        } catch (error) {
            res.status(400).json({ success: false, msg: LOGIN_FAILURE_MSG });
        }
    };
}

export default LoginController;
