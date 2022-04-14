import Cargos from "./cargo.js";
import db from '../config/db.js'
import { Sequelize } from "sequelize";

const Colaborador = db.define('Colaboradors',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    Cargos_ID:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:true
    },
    senha:{
        type:Sequelize.STRING,
        allowNull:true
    },
    naturalidade:{
        type:Sequelize.STRING,
        allowNull:true
    },
    nacionalidade:{
        type:Sequelize.STRING,
        allowNull:true
    },
    estado_civil:{
        type:Sequelize.STRING,
        allowNull:true
    },
    genero:{
        type:Sequelize.STRING,
        allowNull:true
    },
    raca:{
        type:Sequelize.STRING,
        allowNull:true
    },
    telefone:{
        type:Sequelize.STRING,
        allowNull:true
    },
    data_nascimento:{
        type:Sequelize.STRING,
        allowNull:true
    },
    pesquisa_desligamento:{
        type:Sequelize.STRING,
        allowNull:true
    },
    
    status:{
        type:Sequelize.STRING,
        allowNull:true
    },
    dominio:{
        type:Sequelize.STRING,
        allowNull: true
    },
    tipo_desligamento:{
        type:Sequelize.STRING,
        allowNull:true
    },
})

Colaborador.Cargos = Colaborador.hasMany(Cargos, {foreignKey:"Colaborador_ID"})
Cargos.Colaborador = Cargos.belongsTo(Colaborador,{foreignKey:{name:'Colaborador_id'}})


export default Colaborador