import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Colaborador from "./colaborador.js";


const pessoafisica = db.define('Pessoa_Fisicas',{
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

Colaborador.pessoafisica = Colaborador.hasMany(pessoafisica,{foreignKey:'Colaborador_ID'})
pessoafisica.Colaborador = pessoafisica.belongsTo(Colaborador,{foreignKey:{name:'Colaborador_ID'}})


export default pessoafisica