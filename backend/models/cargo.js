import Colaborador from "./colaborador.js";
import db from "../config/db.js"
import { Sequelize } from "sequelize";

const Cargos = db.define('Cargos',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    Departamento_ID:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    cargo:{
        type:Sequelize.STRING,
        allowNull: true
    }
})

export default Cargos