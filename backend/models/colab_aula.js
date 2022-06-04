import { Sequelize } from "sequelize";
import db from '../config/db.js';


const colab_aula = db.define('colab_aulas', {
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default colab_aula;