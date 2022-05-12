import { Sequelize } from "sequelize";
import db from '../config/db.js';
import Cargos from "./cargo.js";
import Colaborador from "./colaborador.js";

const Departamento = db.define('departamentos',{
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
    },
    head_id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    }
})

Departamento.belongsTo(Colaborador,{foreignKey:'head_id'})

Departamento.Cargos = Departamento.hasMany(Cargos,{foreignKey:'departamento_id'})
Cargos.belongsTo(Departamento,{foreignKey:'departamento_id'})

export default Departamento