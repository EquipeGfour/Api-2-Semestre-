import sequelize from '../config/db.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config.js'


export const verify = async (req, res) => {
    try{
        const email = req.body.email
        const senha = req.body.senha
        
        const dados = await sequelize.query(`
            select c.email,c.senha,c.id, c.nome,ca.cargo, pf.cpf, pj.cnpj
                from Colaboradors c left join Pessoa_Fisicas as pf 
                    on c.id = pf.colaborador_id 
                left join Pessoa_Juridicas as pj 
                    on c.id = pj.colaborador_id
                left join Cargos as ca 
                    on c.cargos_id = ca.id
                where c.email = '${email}' and c.senha = '${senha}'`,
            {type:sequelize.QueryTypes.SELECT})
        
        if(dados.length < 1 ){
            res.status(401).json({"message":"Email ou Senha incorretos"})
        }
        else{

            const token = jwt.sign({dados}, process.env.SECRET, {
                expiresIn: 3000
            })
            console.log(token)
            res.json({"message":"Login Realizado com Sucesso", dados, auth:true, token:token}) 
        } 
    } catch (error) {
        res.json({ message: error.message });
    } 
}

export const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {

    console.log(decoded)
    
    if (err) return res.status(401).json({ auth: false, message: 'Failed to authenticate token.' });
    
    req.userId = decoded.id;
    next();
    });
}