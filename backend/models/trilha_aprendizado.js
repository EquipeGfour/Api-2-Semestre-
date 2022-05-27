import { Sequelize } from "sequelize";
import db from '../config/db.js'
import Cursos from "./cursos.js";

const TrilhaAprendizado = db.define('trilha_aprendizados',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
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
    pessoa_fisicas_colaborador_id:{
        type:Sequelize.INTEGER,
        allowNull: true
    }
})



Cursos.belongsToMany(TrilhaAprendizado,{through:'cursos_trilhas',foreignKey:"curso_id"})
TrilhaAprendizado.belongsToMany(Cursos,{through:'cursos_trilhas',foreignKey:"trilha_id"})

export default TrilhaAprendizado