import { Sequelize } from "sequelize";
import db from "../config/db.js"
import Cargos from './cargo.js'

const Acessos = db.define('acessos',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    nivelacesso:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
})
Acessos.belongsTo(Cargos,{foreignKey:'cargo_id'})

export default Acessos