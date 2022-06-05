import { Sequelize } from "sequelize";
import db from '../config/db.js'
import Colaborador from './colaborador.js'

const Contrato = db.define('contratos',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    faixa_salarial:{
        type:Sequelize.INTEGER,
        allowNull:true,
    },
    auxilio_creche:{
        type:Sequelize.INTEGER,
        allowNull:true,
    },
    vale_refeicao:{
        type:Sequelize.INTEGER,
        allowNull:true,
    },
    distrato:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    contrato_trabalho:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    codigo_conduta_etica:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    vale_transporte:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    data_Admissao:{
        type:Sequelize.DATE,
        allowNull:true
    },
    plano_saude:{
        type:Sequelize.STRING,
        allowNull:true
    },
})

Colaborador.Contrato = Colaborador.hasOne(Contrato,{foreignKey:'colaborador_id'})
Contrato.Colaborador = Contrato.belongsTo(Colaborador,{foreignKey:'colaborador_id'})

export default Contrato