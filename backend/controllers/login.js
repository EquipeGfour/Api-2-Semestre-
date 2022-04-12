import sequelize from '../config/db.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'


const secret = "";//esse segredo do JWT seria uma config

export const verify = async (req, res) => {
    try{
        const email = req.body.email
        const senha = req.body.senha
        
        const dados = await sequelize.query(`
            select c.email,c.senha,c.ID, c.nome,ca.cargo, pf.cpf, pj.cnpj
                from Colaboradors c left join Pessoa_Fisicas as pf 
                    on c.ID = pf.Colaborador_ID 
                left join Pessoa_Juridicas as pj 
                    on c.ID = pj.Colaborador_ID
                left join Cargos as ca 
                    on c.Cargos_ID = ca.ID
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



export function verifyJWT(req, res, next){
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {

    console.log(decoded)
    
    if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
    
      // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    next();
    });
}