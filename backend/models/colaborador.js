import Cargos from "./cargo.js";
import db from '../config/db.js'
import { Sequelize } from "sequelize";

const Colaborador = db.define('colaboradors',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
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
    tipo_pessoa:{
        type:Sequelize.STRING,
        allowNull:true
    },
    ddd:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    numero:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    data_nascimento:{
        type:Sequelize.DATE,
        allowNull:true
    },
    pesquisa_desligamento:{
        type:Sequelize.STRING,
        allowNull:true
    },
    base:{
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