import express, {NextFunction, Request, Response} from 'express';

import router from './routes/index.route';
import { ExceptionAttribute, NotFoundException } from './exceptions/index.exception';
import { logger, myRes, myTime } from './utils/index.utril';

const app = express();
app.use( express.json() );

app.use((req:Request, res:Response, next:NextFunction)=> {
    const body = JSON.stringify(req.body) || null;
    logger.info(`[${myTime.getNow}] ${req.method} ${req.path} body=[${body}]`);
    next();
})

// service router
app.use( router );

// server on
app.listen(3000, () => {
    logger.info(`🚀user server on port=3000`);
});

// unknown route error
app.use( ( req:Request, res:Response, next:NextFunction ) => {
    logger.info('not found route test');
    const test:ExceptionAttribute = new ExceptionAttribute(40401, `not found route`);
    throw new NotFoundException( test );
  });
  
  // exception middleware
  app.use( ( error: any, req:Request, res:Response, next:NextFunction ) => {
    logger.error( `${error.stack}` );
    myRes.error(res, error)
  });