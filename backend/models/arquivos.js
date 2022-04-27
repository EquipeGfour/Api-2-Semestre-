import {Sequelize} from 'sequelize';
import db from "../config/db.js"

const Arquivos = db.define('Arquivos',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    nome_arquivos:{
        type:Sequelize.STRING
    },
    extensao:{
        type:Sequelize.STRING
    },
    Colaborador_ID:{
        type:Sequelize.STRING,
        allowNull: true
    }
})

export default Arquivos