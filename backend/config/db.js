import { Sequelize } from "sequelize";

const db = new Sequelize('ionic','root','senha',{
    host:'localhost',
    dialect:'mysql',
    port:'3306'
});

export default db;