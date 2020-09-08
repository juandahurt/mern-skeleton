import express from 'express';
import { UserRouter } from './components/user';

const appRouter = express.Router();
appRouter.use('/user', new UserRouter().router);

export default appRouter;