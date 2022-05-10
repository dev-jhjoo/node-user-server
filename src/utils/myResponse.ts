import { Response } from 'express';

class MyResHandler {
    success = ( res:Response, result:object ) => {
      res.status( 200 ).json( result );
    }

    error = ( res:Response, error:any ) => {
      const { status, code, message } = error;
      res.status( status || 500 )
        .json({
          resultCode: code || 9999,
          resultMessage: message || 'undefinde error'
        });
    }
}

const myRes = new MyResHandler();
export default myRes;
