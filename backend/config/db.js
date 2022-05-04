import { Sequelize } from "sequelize";
import 'dotenv/config' 

const DB = process.env.BD
const USER = 'root' 
const senha = process.env.BD_SENHA
const HOST = 'localhost'
const PORT = 3306


const url = process.env.DATABASE_URL || `mysql://${USER}:${senha}@${HOST}:${PORT}/${DB}`

const db = new Sequelize(url, {
    dialectOptions: {
        charset: 'utf8mb4',
        multipleStatements: true
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
            }
            }
            )

export default db;

