import { Sequelize } from "sequelize";
import db from '../config/db.js'
import Colaborador from "./colaborador.js";

const Endereco = db.define('enderecos',{
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
        type:Sequelize.STRING,
        allowNull:true
    },
    regiao:{
        type:Sequelize.STRING,
        allowNull: true
    },

    rua:{
        type:Sequelize.STRING,
        allowNull:true
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

Colaborador.Endereco = Colaborador.hasMany(Endereco,{foreignKey:'colaborador_id'})
Endereco.Colaborador = Endereco.belongsTo(Colaborador,{foreignKey:{name:'colaborador_id'}})

export default Endereco


