import multer from 'multer'
import { Request } from 'express'
import path from 'path'

const uploadConfig  = {
    storage : multer.diskStorage({
        //utiliza o path, para caso de SO's diferentes
        //Exemplo:
        //Win : ..\..\uploads
        //Linux : ../../uploads
        destination: path.resolve(__dirname, '..','..', 'uploads'),


        filename: (req , file ,callback) =>{

            const ext = path.extname(file.originalname)
            const name =  path.basename(file.originalname, ext)
            callback(null,`${name}-${Date.now()}${ext}`)}
            //callback -> funcao que deve ser chamada assim que o nome do arquivo estiver pronto

    }),
}

export default uploadConfig