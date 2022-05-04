import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Colaborador from "./colaborador.js";


const pessoafisica = db.define('pessoa_fisicas',{
    colaborador_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
    },
    
    cpf:{
        type:Sequelize.STRING,
        allowNull:true,
    },
})

Colaborador.pessoafisica = Colaborador.hasOne(pessoafisica,{foreignKey:'colaborador_id'})
pessoafisica.Colaborador = pessoafisica.belongsTo(Colaborador,{foreignKey:{name:'colaborador_id'}})


export default pessoafisica