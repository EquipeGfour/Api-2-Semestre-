import Colaborador from "./colaborador.js";
import db from "../config/db.js"
import { Sequelize } from "sequelize";

const Cargos = db.define('cargos',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    departamento_id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    cargo:{
        type:Sequelize.STRING,
        allowNull: true
    },
    nivel:{
        type:Sequelize.STRING,
        allowNull: true
    }
})

export default Cargos