import { sendMail } from "../functions/sendEmail.js";
import { geradorSenha } from "../functions/gerador_senha.js";
import { createPessoaFisica } from "../service/pessoaFisicaService.js";
import { createPessoaJuridica } from "../service/pessoJuridicaService.js";
import Departamento from "../models/departamentos.js";
import Cargos from "../models/cargo.js"
import pessoafisica from "../models/pessoafisica.js";
import Colaborador from "../models/colaborador.js";
import Sequelize from "../config/db.js"

export const insertPreRegistroCpf = async(req, res) => {
    const t = await Sequelize.transaction();
    try{
        const senha = geradorSenha()
        const email = req.body.email
        const pessoaFisica = {
            cpf:req.body.cpf,
            colaborador:{
                nome:req.body.nome,
                email:req.body.email,
                cargos_id:req.body.cargos_id,
                gestor_id:req.body.gestor_id,
                senha:senha,
                
            }
        }
        console.log(pessoaFisica)
        const dados = await createPessoaFisica(pessoaFisica, t)
        console.log(dados)
        await sendMail(email,senha)
        return res.status(201).json(dados) 
        
    }catch (error) {
        await t.rollback()
        res.status(500).json({ message: error.message });
    }
}


export const insertPreRegistroCnpj = async(req, res) => {
    const t = await Sequelize.transaction();
    try{
        const senha = geradorSenha()
        const email = req.body.email
        const pessoaJuridica = {
                nome:req.body.nome,
                email:req.body.email,
                cargos_id:req.body.cargos_id,
                gestor_id:req.body.gestor_id,
                empresa_id:req.body.empresa_id,
                senha:senha,

        }
        const dados = await createPessoaJuridica(pessoaJuridica,t);
        await sendMail(email,senha)
        return res.status(201).json(dados)

    }catch (error) {
        await t.rollback()
        console.log(error)
        res.status(500).json({ message: error.message });
    }
}

export const getDepartCargo =  async (req, res) => {
    try{
        const dados = await Departamento.findAll({
            attributes:['id','area'],
            include:{
                model:Cargos,
                attributes:['id', 'cargo', 'departamento_id', 'nivel']
            }
        })
        return res.status(202).json(dados)
    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const getCargo = async (req, res) => {
    try{
        const dados = await pessoafisica.create({
            cpf:req.body.cpf,
            colaborador_id :req.body.colaborador_id
        })
        res.status(202).json(dados)
    }catch(error){
        res.status(500).json({ message:error })
}} 

export const getGestores = async (req, res) => {
    try{
        const dados = await Colaborador.findAll({
            include:{
                model:Cargos,
                attributes:['id', 'cargo'],
                where:{departamento_id:req.params.id},
                include:{
                    model:Departamento,
                    attributes:['id'],
                    where:{id:req.params.id}
                    
                }
            },
            attributes:['id', 'nome']
        })
        res.status(202).json(dados)
    }catch(error){
        res.status(500).json({ message:error })
}} 
