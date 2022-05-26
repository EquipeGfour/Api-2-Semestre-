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
    extra_curricular:{
        type:Sequelize.STRING,
        allowNull:true
    },
    termo_pi:{
        type:Sequelize.STRING,
        allowNull:true
    },
    idioma:{
        type:Sequelize.STRING,
        allowNull:true
    },
    instituicao:{
        type:Sequelize.STRING,
        allowNull:true
    },
    carga_horaria:{
        type:Sequelize.STRING,
        allowNull:true
    },
    ano_conclusao:{
        type:Sequelize.NUMBER,
        allowNull:true
    },
    status_curso:{
        type:Sequelize.STRING,
        allowNull:true
    },
})

Colaborador.DadosAcademicos = Colaborador.hasMany(DadosAcademicos,{foreignKey:'colaborador_id',as:"DadosAcademicos"})
DadosAcademicos.Colaborador = DadosAcademicos.belongsTo(Colaborador,{foreignKey:'colaborador_id',as:"DadosAcademicos"})

export default DadosAcademicos