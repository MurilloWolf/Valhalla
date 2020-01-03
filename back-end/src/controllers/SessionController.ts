import { Request , Response} from 'express'
import User from '../model/User'
import  '../database'

class SessionController {

    async login(req : Request, res : Response) :Promise<Response>{
        const {email,password}  = req.body
        const users = await User.findOne({
            where: {email, password},
        });
        return res.json(users);
    }

}

export default new SessionController()