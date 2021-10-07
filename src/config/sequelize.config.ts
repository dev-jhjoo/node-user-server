import dotenv from 'dotenv';
import logger from '../utils/myLogger.util';
import { myConfig } from './index.config';


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

const sequelizeConfig:sequelizeConfigAttributes = {
    database: myConfig.database || '',
    username: myConfig.username || '',
    password: myConfig.password || '',
    options: {
        host: myConfig.dbhost || '',
        port: myConfig.dbport,
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

export default sequelizeConfig;
