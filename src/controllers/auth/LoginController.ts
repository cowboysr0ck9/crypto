import * as express from 'express';

class LoginController {
    public path = '/login';
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        // Destructures "this" keyword
        const { path, router, ...x } = this;
        router.get(`${path}`, x.login);
        router.get(`${path}/check/:id`, x.check);
    }

    login = async (req: express.Request, res: express.Response) => {
        res.json('login');
    };

    check = async (req: express.Request, res: express.Response) => {
        const id = req.params.id;
        res.json(id);
    };
}

export default LoginController;
