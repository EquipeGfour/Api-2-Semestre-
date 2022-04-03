import { Sequelize } from "sequelize/types";
import db from '../config/db.js';
import cargo from './cargo.js'

const Departamento = db.define('Departamento',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    area:{
        type:Sequelize.STRING,
        allowNull:false
    },
    head:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

Departamento.belongsTo(cargo,{foreignKey:'cargo_id'})

export default Departamento