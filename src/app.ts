import express, {NextFunction, Request, Response} from 'express';

import router from './routes/index.route';
import { ExceptionAttribute, NotFoundException } from './exceptions/index.exception';
import { logger, myRes, myTime } from './utils/index.utril';
import { myConfig } from './config/index.config';
import db from './models/index.model';

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
const port = myConfig.serverPort;
app.listen(port, () => {
    logger.info(`🚀user server on port=${port}`);

      // db connect
  db.sequelize.authenticate().then( async () => {
    try {
      await db.sequelize.sync( db.syncConfig );
      logger.info( '[DB]Connection has been established successfully.' );
    } catch ( error ) {
      logger.error( `[DB]Unable to connect to the database error=${error}` );
    }
  });
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