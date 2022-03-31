import  express  from "express";
import db from './config/db.js';
import cors from "cors";
import ColaboradorRouter from './routes/colaboradorRouter.js';
import LoginRouter from './routes/loginRouter.js'


const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
app.use(cors());
app.use(express.json());
app.use('/colab',ColaboradorRouter)

app.use('/login', LoginRouter)

app.listen(5000 , ()=> console.log('Server running at port 5000. :D'))
