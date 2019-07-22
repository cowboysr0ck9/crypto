import * as express from 'express';
import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';

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
    }

    // Creates JWT Token
    register = async (req: express.Request, res: express.Response) => {
        const token = jwt.sign({ id: 'test', role: 'analyst', department: 'Back Office' }, 'password');

        res.json({ token });
    };

    verify = (req: express.Request, res: express.Response) => {
        const { ...x } = req.body;
        const isValid = jwt.verify(x.token, 'password');
        res.json({ isValid });
    };
}

export default RegisterController;
