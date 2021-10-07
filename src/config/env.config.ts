import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const myConfig = {
    //server config
    serverPort: Number( process.env.SERVER_PORT ),

    // db config
    username: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB,
    dbhost: process.env.MYSQL_DB_HOST,
    dbport: Number( process.env.MYSQL_DB_PORT )
}

export default myConfig;
