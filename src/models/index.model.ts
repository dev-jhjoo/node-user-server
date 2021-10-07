import { Sequelize } from 'sequelize';
import { sequelizeConfig } from '../config/index.config';
import users from './users.model';

const { database, username, password, options } = sequelizeConfig;
const sequelize = new Sequelize( database, username, password, options );
const syncConfig = { alter: true };
// const syncConfig = { force: false, alter: false };

const db = {
    sequelize,
    syncConfig,
    users: users(sequelize)
}

export default db;