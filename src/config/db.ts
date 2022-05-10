import dotenv from 'dotenv';
import env from './env';
import logger from '../utils/myLogger';

dotenv.config({ path: '.env' });

interface sequelizeConfigAttributes{
    database:string;
    username:string;
    password:string;
    options:Record<string, unknown>;
}

const myLog = ( msg:string ) => {
  logger.info( msg );
};

const db:sequelizeConfigAttributes = {
  database: env.database || '',
  username: env.username || '',
  password: env.password || '',
  options: {
    host: env.dbhost || '',
    port: env.dbport,
    dialect: 'mysql',
    timezone: '+09:00',
    models: [ `${__dirname}/models` ],
    pool: {
      max: 5,
      min: 1,
      idle: 10000
    },
    logging: myLog
  }
};

export default db;
