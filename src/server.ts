import App from './app';

import AuthController from './controllers/auth.controller';
import UserController from './controllers/user.controller';

import loggerMiddleWare from './middlewares/logger';
import * as bodyParser from 'body-parser';
import cors from 'cors';

const app = new App({
    port: 8000,
    controllers: [
        new AuthController(),
        new UserController()
    ],
    middleWares: [
        loggerMiddleWare,
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        cors()
    ]
})

app.listen();