import Colaborador from "../models/colaborador.js";
import pessoafisica from "../models/pessoafisica.js";
import PessoaJuridica from "../models/pessoa_juridica.js";
import { sendMail } from "../functions/sendEmail.js";
import { geradorSenha } from "../functions/gerador_senha.js";

export const insertPreRegistroCpf = async(req, res) => {
    try{
        const senha = geradorSenha()
        const email = req.body.email
        const dados = await pessoafisica.create({
            cpf:req.body.cpf,
            colaborador:{
                nome:req.body.nome,
                email:req.body.email,
                senha:senha,
            }
        },{
            include: [{
            association: pessoafisica.Colaborador}]
        }
        );
        await sendMail(email,senha)
        return res.json(dados) 
        
    }catch (error) {
        res.json({ message: error.message });
    }
}
export const insertPreRegistroCnpj = async(req, res) => {
    try{
        const senha = geradorSenha()
        const email = req.body.email
        const dados = await PessoaJuridica.create({
            cnpj:req.body.cnpj,
            colaborador:{
                nome:req.body.nome,
                email:req.body.email,
                senha:senha,
            }
        },{
            include: [{
            association: PessoaJuridica.Colaborador}]
        }
        );
        await sendMail(email,senha)
        return res.json(dados)

    }catch (error) {
        res.json({ message: error.message });
    }
}







