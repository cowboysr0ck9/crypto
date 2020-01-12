import * as express from 'express';

class LoginController {
    public path = '/login';
    public router = express.Router();

    constructor() {
        const { path, router, ...x } = this;
        router.get(`${path}`, x.login);
        router.get(`${path}/check/:id`, x.check);
    }

    login = async (req: express.Request, res: express.Response) => {
        try {
            res.status(200).json({ success: true, data: 'login works' });
        } catch (error) {
            res.status(400).json({ success: false, msg: 'Login failed' });
        }
    };

    check = async (req: express.Request, res: express.Response) => {
        try {
            res.status(200).json({ success: true, data: `Login check worked ${req.params.id}` });
        } catch (error) {
            res.status(400).json({ success: false, msg: 'Login check failed' });
        }
    };
}

export default LoginController;
