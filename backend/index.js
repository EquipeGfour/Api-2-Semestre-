import  express  from "express";
import db from './config/db.js';
import cors from "cors";
import ColaboradorRouter from './routes/colaboradorRouter.js';
import LoginRouter from './routes/loginRouter.js'
import preRegistroRouter from './routes/preRegistroRouter.js'
import departamentoRouter from './routes/departamentoRouter.js'
import cargoRouter from './routes/cargoRouter.js'


const app = express();

try {
    db.authenticate().then(()=>{
        console.log('Banco de Dados Conectado.');
    });
    
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json());

app.use('/colab',ColaboradorRouter)

app.use('/login', LoginRouter)

app.use('/cargo', cargoRouter)

app.use('/preRegistro', preRegistroRouter)

app.use('/departamento', departamentoRouter)

app.listen(5000 , ()=> console.log('Servidor rodando na porta 5000. :D'))
