import { Sequelize } from "sequelize";
import db from '../config/db.js'

const Endereco = db.define('Colaborador',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    estado:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    cep:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    regiao:{
        type:Sequelize.STRING,
        allowNull: true
    },
    cidade:{
        type:Sequelize.STRING,
        allowNull:true
    },
    bairro:{
        type:Sequelize.STRING,
        allowNull:true
    },
    complemento:{
        type:Sequelize.STRING,
        allowNull:true
    }
})

export default Endereco