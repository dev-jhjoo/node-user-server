class MyLogger {
    info = ( str:string ) => {
      console.log( ` ${str}` );
    }

    error = ( str:string ) => {
      console.log( str );
    }
}

const logger = new MyLogger();
export default logger;
