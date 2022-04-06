import Colaborador from "../models/colaborador.js"
import Cargos from "../models/cargo.js"
import pessoafisica from "../models/pessoafisica.js"

export const verify = async (req, res) => {
    try{
        const dados = await Colaborador.findOne({ where: { email: req.body.email, senha:req.body.senha},
        include:[Cargos]
        
        })
        // res.json(dados)
        if(dados === null ){
            res.status(401).json({"message":"Email ou Senha incorretos"})
        }
        else{
            const cpf = await findIdPessoaFisica(dados)
            res.json({"message":"Login Realizado com Sucesso",dados,cpf}) 
        } 
    } catch (error) {
        res.json({ message: error.message });
    } 
}

export const findIdPessoaFisica = async (pessoa) =>{
    const cpf = await pessoafisica.findOne({where:{
        colaboradorid:pessoa.id
    }})
    return cpf
}