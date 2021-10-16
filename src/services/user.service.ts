import { Request, Response } from 'express';
import db from '../models/index.model';
import { createUser, CreateUserDAO, UsersCreationAttrivutes } from '../models/users.model';
import myRes from '../utils/myResponse.util';


class UserService{
    /**
     * method=GET
     * @param req 
     * @param res 
     */
    gerUsers = async (req:Request, res:Response) => {
        try {
            const users = await db.users.findAll();
            myRes.success(res, { users });
        } catch (error) {
            myRes.error(res, error);
        }
    }

    /**
     * method=POST
     * @param req 
     * @param res 
     */
    createUser = async (req:Request, res:Response) => {
        try {
            const createUserDao = this.createUserPreCheck(req);
            await createUser(createUserDao)
            myRes.success(res, { isSuccess:true } )
        } catch (error) {
            myRes.error(res, error);
        }
    }
    private createUserPreCheck = (req:Request):CreateUserDAO => {
        const {firstName, lastName, gender, age, email, password} = req.body;
        return {firstName, lastName, gender, age, email, password};
    }
}

export default new UserService();
