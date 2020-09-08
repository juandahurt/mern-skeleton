import express from 'express';
import { UserController } from './user.controller';


export class UserRouter {
    router: express.Router

    constructor() {
        this.router = express.Router();
        this.setRoutes();
    }

    private setRoutes() {
        this.router.post('/', UserController.create);
        this.router.delete('/:id', UserController.delete);
    }
}