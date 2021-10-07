import { Request, Response } from 'express';
import myRes from '../utils/myResponse.util';


class UserService{
    gerUsers = (req:Request, res:Response) => {
        try {
            myRes.success(res, { isSample:true });
        } catch (error) {
            myRes.error(res, error);
        }
    }

    createUser = async (req:Request, res:Response) => {
        try {
            
        } catch (error) {
            
        }
    }
}

export default new UserService();
