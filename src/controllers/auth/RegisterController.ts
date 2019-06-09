import * as express from 'express';

class RegisterController {
    public path = '/register';
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        const { path, router, ...x } = this;
        router.get(`${path}`, x.register);
        router.get(`${path}/verify`, x.verify);
    }

    register = async (req: express.Request, res: express.Response) => {
        res.json('register');
    };

    verify = (req: express.Request, res: express.Response) => {
        res.json('verified');
    };
}

export default RegisterController;
