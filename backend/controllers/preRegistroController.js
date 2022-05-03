import { sendMail } from "../functions/sendEmail.js";
import { geradorSenha } from "../functions/gerador_senha.js";
import { createPessoaFisica } from "../service/pessoaFisicaService.js";
import { createPessoaJuridica } from "../service/pessoJuridicaService.js";
import Departamento from "../models/departamentos.js";
import Cargos from "../models/cargo.js"

export const insertPreRegistroCpf = async(req, res) => {
    try{
        const senha = geradorSenha()
        const email = req.body.email
        const pessoaFisica = {
            cpf:req.body.cpf,
            Colaborador:{
                nome:req.body.nome,
                email:req.body.email,
                Cargos_ID:req.body.Cargos_ID,
                senha:senha,
            }
        }
        const dados = await createPessoaFisica(pessoaFisica)
        await sendMail(email,senha)
        return res.json(dados) 
        
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const insertPreRegistroCnpj = async(req, res) => {
    try{
        const senha = geradorSenha()
        const email = req.body.email
        const pessoaJuridica = {
            cnpj:req.body.cnpj,
            Colaborador:{
                nome:req.body.nome,
                email:req.body.email,
                Cargos_ID:req.body.Cargos_ID,
                senha:senha,
            }
        }
        const dados = await createPessoaJuridica(pessoaJuridica);
        await sendMail(email,senha)
        return res.json(dados)

    }catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getDepartCargo =  async (req, res) => {
    try{
        const dados = await Departamento.findAll({
            attributes:['id','area'],
            include:{
                model:Cargos,
                attributes:['ID', 'cargo', 'Departamento_ID']
            }
        })
        return res.json(dados)
    }catch(error){
        res.status(500).json({ message:error })
    }
}







