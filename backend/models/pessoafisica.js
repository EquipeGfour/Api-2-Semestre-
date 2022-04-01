import { Sequelize } from "sequelize";
import db from "../config/db.js";
import Colaborador from "./colaborador.js";


const pessoafisica = db.define('pessoa_fisicas',{
    id:{
        type:Sequelize.INTEGER,
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
    estado_civil:{
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
    tipo_arquivo_pessoa_fisica:{
        type:Sequelize.STRING,
        allowNull:false
    }

})


pessoafisica.belongsTo(Colaborador,{foreignKey:{name:'id'}})

export default pessoafisica