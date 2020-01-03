import { Request , Response} from 'express'
import User from '../model/User'
import  '../database'
import { Sequelize } from 'sequelize/types';
/* 
    index : listagem de todos .getAll  
    show : listagem de apenas uma unica
    store : criar
    update: alterar
    destroy: deletar

*/
class UserController {

    /* Não foi possivel identificar o tipo automaticamente, entao foi precisso
     informar qual o tipo das variaveis Req e Res, e por fim informar qual o 
     tipo de dados esperados no retorn dessa função
     
     Não apenas que o retorno é uma promisse , mas qual tipo de dado dentro da 
     promisse*/
    
    async index(req : Request, res : Response) :Promise<Response>{
        const users = await User.findAll();
        return res.json(users);
}

    async store(req : Request, res : Response) :Promise<Response>{
        const {email, name, password} = req.body
        try{
            const users = await User.create({ name, password, email});
            return res.json(users);

        }catch(err){
            return res.json({erro:"esse email já esta cadastrado"})
        }
    }

    async show (req: Request , res : Response ) : Promise<Response>{
        const { email } = req.body
        try{
            const user = await User.findOne( {where:{email}});
            return res.json(user);

        }catch(err){
            return res.json({erro:"Não foi possivel encotrar um usuário com esse e-mail"})
        }
      
    }

   

    async update (req: Request , res : Response ) : Promise<Response> {

       const { name,email, password } = req.body
       const {uuid} = req.headers
        try{
            const user = await User.update({name,email,password},{where:{uuid}})
            return res.json(user)
        }catch(err){
            return res.json({erro : "Nao foi possivel fazer o update"})
        }
    }

   
}

export default new UserController()