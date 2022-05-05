import {Sequelize} from 'sequelize';
import db from "../config/db.js"

const Arquivos = db.define('arquivos',{
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
    url_arquivo:{
        type:Sequelize.STRING
    },
    colaborador_id:{
        type:Sequelize.STRING,
        allowNull: false
    }
})

export default Arquivos