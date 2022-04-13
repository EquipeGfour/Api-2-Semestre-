import { Sequelize } from "sequelize";
import db from '../config/db.js'
import Colaborador from './colaborador.js'

const PessoaJuridica = db.define('Pessoa_Juridicas',{
    Colaborador_ID:{
        type:Sequelize.INTEGER,
        primaryKey: true
    },
    cnpj:{
        type:Sequelize.STRING,
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
        type:Sequelize.STRING,
        allowNull:true
    }  
})

PessoaJuridica.Colaborador = PessoaJuridica.belongsTo(Colaborador,{foreignKey:{name:'Colaborador_ID'}})



export default PessoaJuridica