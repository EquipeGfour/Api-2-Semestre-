import { Sequelize } from "sequelize";
import db from '../config/db.js';
import Arquivo from './arquivos.js';

// define the model with attributes id,titulo_video,descricao_aula,tempo_video
const Aula = db.define('aulas',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    titulo_aula:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    descricao_aula:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    tempo_aula:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    curso_id:{
        type:Sequelize.INTEGER,
        allowNull:true,
    },
    nome_aula_arq:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    extensao_aula:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    url_arq_aula:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    tipo_arq_aula:{
        type:Sequelize.STRING,
        allowNull:true,
    }
})


export default Aula