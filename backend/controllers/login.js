import sequelize from '../config/db.js'

export const verify = async (req, res) => {
    try{
        const email = req.body.email
        const senha = req.body.senha
        
        const dados = await sequelize.query(`
            select c.email,c.senha,c.ID, c.nome,ca.cargo, pf.cpf, pj.cnpj
                from colaboradors c left join pessoa_fisicas as pf 
                    on c.ID = pf.Colaborador_ID 
                left join pessoa_juridicas as pj 
                    on c.ID = pj.Colaborador_ID
                left join cargos as ca 
                    on c.Cargos_ID = ca.ID
                where c.email = '${email}' and c.senha = '${senha}'`,
            {type:sequelize.QueryTypes.SELECT})
        
        if(dados.length < 1 ){
            res.status(401).json({"message":"Email ou Senha incorretos"})
        }
        else{
            res.json({"message":"Login Realizado com Sucesso", dados}) 
        } 
    } catch (error) {
        res.json({ message: error.message });
    } 
}


