import { Sequelize } from "sequelize";
import db from '../config/db.js'
import Colaborador from './colaborador.js'

const PessoaJuridica = db.define('pessoa_juridicas',{
    id:{
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

Colaborador.PessoaJuridica = Colaborador.belongsTo(PessoaJuridica,{foreignKey:{name:'empresa_id'}})
PessoaJuridica.Colaborador = PessoaJuridica.hasMany(Colaborador,{foreignKey:'empresa_id'})

// PessoaJuridica.Colaborador = PessoaJuridica.belongsTo(Colaborador,{foreignKey:{name:'id'}})
// Colaborador.PessoaJuridica = Colaborador.hasOne(PessoaJuridica,{foreignKey:'id'})

export default PessoaJuridica