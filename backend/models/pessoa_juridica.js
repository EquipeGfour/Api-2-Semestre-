import { Sequelize } from "sequelize";
import db from '../config/db.js'
import Colaborador from './colaborador.js'

const PessoaJuridica = db.define('Pessoa_juridicas',{
    colaboradorId:{
        type:Sequelize.INTEGER,
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

PessoaJuridica.Colaborador = PessoaJuridica.belongsTo(Colaborador,{foreignKey:{name:'colaboradorId'}})



export default PessoaJuridica