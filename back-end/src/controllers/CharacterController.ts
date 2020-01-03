import { Request , Response} from 'express'
import Character from '../model/Character'
import  '../database'
class CharacterController {
    
    async index(req : Request, res : Response) :Promise<Response>{
        const { race } = req.query
        let characters 
  
            if(!race){
                characters = await Character.findAll()
                return res.status(200).json(characters)
            }
            characters = await Character.findAll({ where:{race}})
            return res.status(200).json(characters);    
           

      

    }

    async store(req: Request, res : Response) :Promise <Response>{
        const {filename} = req.file
        const {name, race, lore} = req.body
        const {uuid} = req.headers



        try{
            const character = await Character.create({name,race,lore,user_uuid: uuid, thumbnail: filename})
            return res.status(200).send(character)
        }catch(err){
            return res.status(400).send(err)
        }
        /*
        const person = await Character.create({
            name,race,lore
        }) */

    }

   /*  async show(req: Request, res : Response) :Promise <Response>{

    }

    async update(req: Request, res : Response) :Promise <Response>{
        
    } */
}

export default new CharacterController()