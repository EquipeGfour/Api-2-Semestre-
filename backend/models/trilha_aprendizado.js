import { Sequelize } from "sequelize";
import db from '../config/db.js'

const TrilhaAprendizado = db.define('Colaborador',{
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
    }
})

export default TrilhaAprendizado