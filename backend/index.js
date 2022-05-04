import  express  from "express";
import db from './config/db.js';
import cors from "cors";
import ColaboradorRouter from './routes/colaboradorRouter.js';
import LoginRouter from './routes/loginRouter.js'
import preRegistroRouter from './routes/preRegistroRouter.js'
import departamentoRouter from './routes/departamentoRouter.js'
import cargoRouter from './routes/cargoRouter.js'
import pdf_router from './routes/pdf_router.js'
import uploadRouter from './routes/uploadRouter.js'
import path from 'path'


const __dirname = path.resolve() 


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

app.use('/api/colab',ColaboradorRouter)

app.use('/api/login', LoginRouter)

app.use('/api/cargo', cargoRouter)

app.use('/api/preRegistro', preRegistroRouter)

app.use('/api/departamento', departamentoRouter)

app.use('/api/pdf',pdf_router)

app.use('/api/upload', uploadRouter)

// para rodar o servidor heroku
app.use(express.static(path.join(__dirname, '..','front_end','build')));

console.log(path.resolve())
app.get ('/*', (req, res) => {
    res.sendFile(path.join('build','index.html'),{root:path.join(__dirname, '..','front_end')});
});
const port = process.env.PORT || 5000;
app.listen(port , ()=> console.log(`Servidor rodando na porta ${port}. :D`));
