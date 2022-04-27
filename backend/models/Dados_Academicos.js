import { Sequelize } from "sequelize";
import db from "../config/db.js"
import Colaborador from './colaborador.js'

const DadosAcademicos = db.define('Dados_Academicos',{
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
    termo_PI:{
        type:Sequelize.STRING,
        allowNull:true
    },
    linguas:{
        type:Sequelize.STRING,
        allowNull:true
    },
})

Colaborador.DadosAcademicos = Colaborador.hasMany(DadosAcademicos,{foreignKey:'Colaborador_ID',as:"DadosAcademicos"})
DadosAcademicos.Colaborador = DadosAcademicos.belongsTo(Colaborador,{foreignKey:'Colaborador_ID',as:"DadosAcademicos"})

export default DadosAcademicos