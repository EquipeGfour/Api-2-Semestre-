import { Sequelize } from "sequelize";
import db from '../config/db.js'
import pessoafisica from "./pessoafisica.js"

const TrilhaAprendizado = db.define('TrilhaAprendizado',{
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

TrilhaAprendizado.belongsTo(pessoafisica,{foreignKey:'Pessoa_Fisica_id'})

export default TrilhaAprendizado