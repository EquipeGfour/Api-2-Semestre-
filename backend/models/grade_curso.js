import { Sequelize } from "sequelize";
import db from '../config/db.js'
import TrilhaAprendizado from "./trilha_aprendizado.js";

const GradeCurso = db.define('grade_cursos',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    nome_curso:{
        type:Sequelize.STRING,
        allowNull:true,
    }
})

GradeCurso.belongsTo(TrilhaAprendizado,{foreignKey:'trilha_aprendizados_id'})

export default GradeCurso