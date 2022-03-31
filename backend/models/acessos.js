import { Sequelize } from "sequelize";
import db from "../config/db"
import cargos from './cargo.js'

const Acessos = db.define('Acesso',{
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
Acessos.belongsTo(cargos,{foreignKey:'Cargo_id'})

export default Acessos