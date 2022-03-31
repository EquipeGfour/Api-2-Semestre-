import { Sequelize } from "sequelize/types";
import db from "../config/db";

const pessoafisica = db.define('pessoafisica',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    cpf:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    naturalidade:{
        type:Sequelize.STRING,
        allowNull:false
    },
    nacionalidade:{
        type:Sequelize.STRING,
        allowNull:false
    },
    estadocivil:{
        type:Sequelize.STRING,
        allowNull:false
    },
    genero:{
        type:Sequelize.STRING,
        allowNull:false
    },
    raca:{
        type:Sequelize.STRING,
        allowNull:false
    },

})


pessoafisica.belongsTo(Colaborador,{foreignKey:'Colaborador_id'})

export default pessoafisica