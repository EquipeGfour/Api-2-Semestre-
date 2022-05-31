import { Sequelize } from "sequelize";
import db from '../config/db.js'
import Colaborador from "./colaborador.js";
import Cursos from "./cursos.js";

const TrilhaAprendizado = db.define('trilha_aprendizados',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    pf_id:{
        type:Sequelize.INTEGER,
        allowNull:true,
    },
    nome_trilha:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    status_curso:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    data_inicio:{
        type:Sequelize.DATE,
        allowNull:true
    },
    data_fim:{
        type:Sequelize.DATE,
        allowNull: true
    },
})


Cursos.belongsTo(TrilhaAprendizado, {foreignKey: 'trilha_id'})
TrilhaAprendizado.hasMany(Cursos, {foreignKey: 'trilha_id'})

Colaborador.belongsTo(TrilhaAprendizado,{foreignKey:"trilha_id"})
TrilhaAprendizado.Colaborador = TrilhaAprendizado.hasMany(Colaborador,{foreignKey:"trilha_id"})



export default TrilhaAprendizado