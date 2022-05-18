import Cargos from "./cargo.js";
import db from '../config/db.js'
import { Sequelize } from "sequelize";
import Arquivos from "./arquivos.js";

const Colaborador = db.define('colaboradors',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    cargos_id:{
        type:Sequelize.INTEGER,
        primaryKey: true
        
    },
    gestor_id:{
        type:Sequelize.INTEGER,
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
    rg:{
        type:Sequelize.STRING,
        allowNull:true
    },
    tipo_desligamento:{
        type:Sequelize.STRING,
        allowNull:true
    },
    data_desligamento:{
        type:Sequelize.DATE,
        allowNull:true
    }
})

Cargos.Colaborador = Cargos.hasMany(Colaborador, {foreignKey:'cargos_id'})
Colaborador.Cargos = Colaborador.belongsTo(Cargos,{foreignKey:{name:'cargos_id'}})

Arquivos.Colaborador = Arquivos.belongsTo(Colaborador,{foreignKey:{name:'colaborador_id'}})
Colaborador.Arquivos = Colaborador.hasMany(Arquivos, {foreignKey:'colaborador_id'})

Colaborador.Colaborador = Colaborador.belongsTo(Colaborador,{foreignKey:{name:'gestor_id'}, as:'Gestor'})
Colaborador.Colaborador = Colaborador.hasMany(Colaborador, {foreignKey:'gestor_id', as:'funcionarios'})

export default Colaborador