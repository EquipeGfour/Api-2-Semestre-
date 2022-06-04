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
    descricao_trilha:{
        type:Sequelize.STRING,
        allowNull: true
    },
})


Cursos.belongsTo(TrilhaAprendizado, {foreignKey: 'trilha_id'})
TrilhaAprendizado.hasMany(Cursos, {foreignKey: 'trilha_id'})


Colaborador.belongsToMany(TrilhaAprendizado, {foreignKey: 'colab_id', through:'colab_trilhas'})
TrilhaAprendizado.belongsToMany(Colaborador, {foreignKey: 'trilha_id', through:'colab_trilhas'})


export default TrilhaAprendizado