import express, { Request, Response } from 'express';
import IControllerBase from 'interfaces/IControllerBase.interface';

class AuthController implements IControllerBase {
    public path = '/auth';
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get(`${this.path}/`, this.index);
        this.router.get(`${this.path}/login`, this.login);
    }

    index = (req: Request, res: Response) => {
        res.send('Auth Controller Working!');
    }

    login = (req: Request, res: Response) => {
        res.json({
            status: 200,
            message: 'Login called!'
        })
    }

}

export default AuthController;