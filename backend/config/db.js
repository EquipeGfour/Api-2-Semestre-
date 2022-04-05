import { Sequelize } from "sequelize";
import 'dotenv/config' 

const db = new Sequelize(process.env.BD,'root',process.env.BD_SENHA,{
    host:'localhost',
    dialect:'mysql',
    port:'3306'
});

export default db;