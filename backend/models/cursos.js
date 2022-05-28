import { Sequelize } from "sequelize";
import db from '../config/db.js';
import Aula from './aula.js';

const Cursos = db.define('cursos',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    nome_curso:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    descricao:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    nivel_curso:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    carga_horaria_curso:{
        type:Sequelize.STRING,
        allowNull:true,
    }
})

Cursos.Aula = Cursos.hasMany(Aula,{foreignKey:"curso_id"})
Aula.Cursos = Aula.belongsTo(Cursos,{foreignKey:"curso_id"})

export default Cursos