import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Colaborador from "./colaborador.js";


const pessoafisica = db.define('pessoa_fisicas',{
    Colaborador_ID:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    
    cpf:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    tipo_arquivo_pessoa_fisica:{
        type:Sequelize.STRING,
        allowNull:true
    }

})


pessoafisica.Colaborador = pessoafisica.belongsTo(Colaborador,{foreignKey:{name:'Colaborador_ID'}})


export default pessoafisica