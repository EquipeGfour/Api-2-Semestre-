import { Sequelize } from "sequelize";
import db from "../config/db.js"
import Colaborador from './colaborador.js'

const DadosAcademicos = db.define('dados_academicos',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true
    },
    formacao:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    cursos:{
        type:Sequelize.STRING,
        allowNull:true
    },
    termo_pi:{
        type:Sequelize.STRING,
        allowNull:true
    },
    linguas:{
        type:Sequelize.STRING,
        allowNull:true
    },
})

Colaborador.DadosAcademicos = Colaborador.hasMany(DadosAcademicos,{foreignKey:'colaborador_id',as:"DadosAcademicos"})
DadosAcademicos.Colaborador = DadosAcademicos.belongsTo(Colaborador,{foreignKey:'colaborador_id',as:"DadosAcademicos"})

export default DadosAcademicos