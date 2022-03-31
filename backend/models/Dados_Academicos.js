import { Sequelize } from "sequelize";
import db from "../config/db"
import Colaborador from './colaborador.js'

const DadosAcademicos = db.define('DadosAcademicos',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true
    },
    formacao:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    cursos:{
        type:Sequelize.STRING,
        allowNull:false
    },
    termo_PI:{
        type:Sequelize.STRING,
        allowNull:false
    },
    linguas:{
        type:Sequelize.STRING,
        allowNull:false
    },

})
DadosAcademicos.belongsTo(Colaborador,{foreignKey:'Colaborador_id'})

export default Contrato