import Colaborador from "./colaborador.js";
import db from "../config/db.js"
import { Sequelize } from "sequelize";



const Cargos = db.define('Cargo',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    cargo:{
        type:Sequelize.STRING,
        allowNull:false
    }
})



export default Cargos