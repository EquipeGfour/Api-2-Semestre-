import { Sequelize } from "sequelize";
import 'dotenv/config' 

const DB = process.env.BD
const USER = 'root' 
const senha = process.env.BD_SENHA
const HOST = 'localhost'
const PORT = 3306

const url = process.env.DATABASE_URL || `mysql://${USER}:${senha}@${HOST}:${PORT}/${DB}`

const db = new Sequelize(url, {
    dialectOptions:process.env.DATABASE_URL? {
        
        ssl: {
            rejectUnauthorized: false,
            require:true,

        },
    }:null
})

export default db;

