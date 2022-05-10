import express from 'express';
import indexRoute from './route';
import middleware from './middleware';
import myConfig from './config';

const app = express();
const port = myConfig.env.serverPort;

// body parser
app.use( express.json() );

// log
app.use( middleware.incoming.log );

// route
app.use( indexRoute );

// server on
app.listen( port, () => {
  console.log( `server on port ${port}` );
});
