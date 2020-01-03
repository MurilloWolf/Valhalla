import {Model, DataTypes, Sequelize} from 'sequelize'
import connection from '../database'

class Character extends Model {
   public id! : number
   public name: string
   public race: string
   public lore: string
   public user_uuid : string
   public thumbnail : string
   private connection : Sequelize

}

Character.init({
  id: {
    type: DataTypes.INTEGER, 
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(45),
    allowNull: false,
  },
  race: {
    type: new DataTypes.STRING(45),
    allowNull: false,
  },
  lore: {
    type: new DataTypes.STRING(1000),
    allowNull: false,
  },
  thumbnail : {
    type: new DataTypes.STRING(256),
    allowNull: false
  },



  //Isso é uma FOREING KEY para Usuarios
  user_uuid : {
    type:  DataTypes.UUIDV4,
    references : {
        model: 'Users',
        key: 'uuid'
    }
  },
    
},{

  sequelize: connection,
  tableName: 'Characters'
})


export default  Character