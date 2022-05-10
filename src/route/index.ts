import { Router } from 'express';
import userRouter from './user';

const indexRoute = Router();
indexRoute.use( userRouter );

export default indexRoute;
