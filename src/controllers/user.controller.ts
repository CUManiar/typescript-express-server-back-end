import express, { Request, Response } from 'express';
import IControllerBase from "interfaces/IControllerBase.interface";

const user: Array<{}> = [
    {
        firstName: 'Bob',
        lastName: 'Marcks',
        phone: '123123123',
        empId: '1',
        designation: 'CEO'
    },
    {
        firstName: 'Sally',
        lastName: 'Hazzard',
        phone: '24332222',
        empId: '2',
        designation: 'CTO'
    }
];

class UserController implements IControllerBase {
    public path = '/user';
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.post(`${this.path}/add`, this.addUser);
        this.router.get(`${this.path}`, this.getAllUser);
    }

    getAllUser = (req: Request, res: Response) => {
        res.json({
            status: 200,
            message: 'Response success',
            data: user
        })
    }

    addUser = (req: Request, res: Response) => {
        user.push(req.body);
        res.json({
            status: 200,
            message: 'User info saved successfully!',
            data: user
        });
    }

}

export default UserController;