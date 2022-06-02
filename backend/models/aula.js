import { Sequelize } from "sequelize";
import db from '../config/db.js';
import Arquivo from './arquivos.js';

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
    tempo_video:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    curso_id:{
        type:Sequelize.INTEGER,
        allowNull:true,
    }
})


Arquivo.Aula = Arquivo.belongsTo(Aula,{foreignKey:"aula_id"})
Aula.Arquivo = Aula.hasMany(Arquivo,{foreignKey:"aula_id"})

export default Aula