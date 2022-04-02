import  express  from "express";
import db from './config/db.js';
import cors from "cors";
import ColaboradorRouter from './routes/colaboradorRouter.js';
import LoginRouter from './routes/loginRouter.js'
import preRegistroRouter from './routes/preRegistroRouter.js'


const app = express();

try {
    await db.authenticate();
    console.log('Banco de Dados Conectado.');
} catch (error) {
    console.error('Connection error:', error);
}
app.use(cors());
app.use(express.json());
app.use('/colab',ColaboradorRouter)

app.use('/login', LoginRouter)

app.use('/preRegistro', preRegistroRouter)

app.listen(5000 , ()=> console.log('Servidor rodando na porta 5000. :D'))
