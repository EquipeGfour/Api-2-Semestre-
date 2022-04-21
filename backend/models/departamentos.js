import { Sequelize } from "sequelize";
import db from '../config/db.js';
import Cargos from "./cargo.js";


const Departamento = db.define('Departamentos',{
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
        allowNull:true
    }
})

Departamento.Cargos = Departamento.hasMany(Cargos,{foreignKey:'Departamento_ID'})
Cargos.belongsTo(Departamento,{foreignKey:'Departamento_ID'})

export default Departamento