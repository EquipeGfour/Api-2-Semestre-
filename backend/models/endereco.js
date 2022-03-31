import { Sequelize } from "sequelize";
import db from '../config/db.js'
import Colaborador from "./colaborador.js";

const Endereco = db.define('Enderecos',{
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

Endereco.belongsTo(Colaborador,{foreignKey:'Colaborador_id'})

export default Endereco


