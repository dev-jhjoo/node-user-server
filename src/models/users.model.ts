import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import myTime from '../utils/myTime.util';


interface UsersAttributes{
    id?:number;
    role:string;
    firstName:string;
    lastName:string;
    gender:string;
    age:number;
    email:string;
    password:string;
    createdAt:string;
    updatedAt?:string;
}

export interface UsersCreationAttrivutes extends Optional<UsersAttributes, 'id'>{}
export interface UsersInstance extends Model<UsersAttributes, UsersCreationAttrivutes>, UsersAttributes {}

const UsersModel = ( sequelize:Sequelize ) => sequelize.define<UsersInstance>(
    'Users',
    {
        id: { type: DataTypes.BIGINT({ length: 11 }), autoIncrement: true, primaryKey: true },
        role: {type:DataTypes.STRING, comment:'회원 권한'},
        firstName: {type:DataTypes.STRING, comment:'이름'},
        lastName: {type:DataTypes.STRING, comment:'성'},
        gender: {type:DataTypes.STRING, comment:'성별'},
        age: {type:DataTypes.INTEGER, comment:'나이'},
        email: {type:DataTypes.STRING, comment:'이메일'},
        password: {type:DataTypes.STRING, comment:'비밀번호'},
        createdAt: { type: DataTypes.DATE, comment: '생성일시' },
        updatedAt: { type: DataTypes.DATE, allowNull: true }
    },
    {
        underscored: true,
        timestamps: false,
        comment: '회원'
    }
);

export default UsersModel;

import db from './index.model';
export interface CreateUserDAO{
    firstName:string;
    lastName:string;
    gender:string;
    age:number;
    email:string;
    password:string;
}
export const createUser = async (createUserDao:CreateUserDAO) => {
    const user = await db.users.create({
        role:'NEW',
        firstName:createUserDao.firstName, 
        lastName:createUserDao.lastName, 
        gender:createUserDao.gender, 
        age:createUserDao.age, 
        email:createUserDao.email, 
        password:createUserDao.password,
        createdAt:myTime.getNow
        
    });
    return user;
}
