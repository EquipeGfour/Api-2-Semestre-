import { Sequelize } from "sequelize";
import db from '../config/db.js'

const PessoaJuridica = db.define('Colaborador',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    cnpj:{
        type:Sequelize.INTEGER,
        allowNull:true,
    },
    empresa_contratada:{
        type:Sequelize.STRING,
        allowNull:true
    },
    tempo_formalizacao:{
        type:Sequelize.STRING,
        allowNull: true
    },
    natureza_juridica:{
        type:Sequelize.STRING,
        allowNull:true
    },
    data_fundacao:{
        type:Sequelize.DATE,
        allowNull:true
    }  
})

export default PessoaJuridica