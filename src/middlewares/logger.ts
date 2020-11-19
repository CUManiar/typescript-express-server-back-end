import { Request, Response } from 'express';

const loggerMiddleWare = (req: Request, res: Response, next: any) => {
    console.log('Request Logged: ', `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} ::`, req.method, req.path);
    next();
}

export default loggerMiddleWare;