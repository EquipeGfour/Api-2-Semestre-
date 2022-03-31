import { Sequelize } from "sequelize";
import db from "../config/db"


const Cargos = db.define('Cargo',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    cargo:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

Cargos.belongsTo(Colaborador,{foreignKey:'Colaborador_id'})

export default Cargo