import sequelize from '../config/db.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config.js';


export const verify = async (req, res) => {
    try{
        const email = req.body.email
        const senha = req.body.senha
        
        const dados = await sequelize.query(`
            select c.email,c.senha,c.id, c.nome, c.status, ca.cargo,ca.nivel, pf.cpf, pj.cnpj, c.empresa_id
                from colaboradors c left join pessoa_fisicas as pf 
                    on c.id = pf.colaborador_id 
                left join pessoa_juridicas as pj 
                    on c.empresa_id = pj.id
                left join cargos as ca 
                    on c.cargos_id = ca.id
                where c.email = '${email}' and c.senha = '${senha}'`,
            {type:sequelize.QueryTypes.SELECT})
            
        if(dados.length < 1 ){
            res.status(401).json({"message":"Email ou Senha incorretos"})
        }
        else{

            const token = jwt.sign({dados}, process.env.SECRET, {
                expiresIn: 60*60 // 1 Hora Para Expirar
            })
            console.log(token)
            res.status(202).json({"message":"Login Realizado com Sucesso", dados, auth:true, token:token}) 
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
    
    req.user = decoded.dados[0];
    next();
    });
}

export const verifyAdm = (req, res, next) => {
    const nivel = req.user.nivel
    if ( nivel !== 'diretoria' && nivel !== 'gerencia' ) return res.status(401).json({ auth: false, message: 'Sem Permissão' });
    next();
}