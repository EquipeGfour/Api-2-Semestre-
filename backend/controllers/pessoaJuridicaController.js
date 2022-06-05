import Colaborador from "../models/colaborador.js";
import PessoaJuridica from "../models/pessoa_juridica.js";
import Contrato from '../models/contrato.js'
import Endereco from '../models/endereco.js' 
import Cargos from "../models/cargo.js";
import Departamento from "../models/departamentos.js";

export const selectAllPj = async (req, res) => {
    try{

        const dados = await PessoaJuridica.findAll({
            include:{
                model:Colaborador,
                attributes:['id'],
                where:{
                    status:'Ativo'
                }
            }
        })
        console.log(dados)
        res.json(dados)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const insertEmpresa = async (req, res) => {
    try{

        const dados = await PessoaJuridica.create(req.body)
        res.json(dados)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const getEmpresaById = async (req, res) => {
    try{
        const dados = await PessoaJuridica.findOne({
            where:{
                id:req.params.id
            } 
        })
        res.json(dados)

    }catch(error){
        console.log(error)
        res.status(500).json({ messge:error })
    }
}

export const getAllColabEmpresa = async (req, res) => {
    try{
        const dados = await PessoaJuridica.findOne({
            where: {
                id: req.params.id
            },
            include:{
                model:Colaborador
            }
        })
        res.json(dados)
    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const deleteEmpresa = async (req, res) => {
    try{
        const dados = await PessoaJuridica.destroy({
            where:{
                id:req.params.id
            }
        })
        res.json(dados)
    }catch(error){
        res.status(500).json({ message:error })
    }
}


export const getFuncCnpj = async (req, res) => {
    try{
        const dados = await Colaborador.findOne({
            where:{
                id:req.params.id
            },
            attributes:['id','email','telefone','nome'],
            include:[{
                model:PessoaJuridica,
                attributes:['id','empresa_contratada','cnpj','data_fundacao']
            },
            {
                model:Contrato,
                attributes:['id','data_Admissao']
            },
            {
                model:Endereco,
                attributes:['id','estado', 'cep','regiao','rua', 'cidade', 'bairro', 'complemento']
            },
            {
                model: Cargos,
                attributes: ['cargo', 'id'],
                include: {
                    model: Departamento,
                    attributes: ['area', 'id']
                }
            }]
        })
        res.json(dados)
    }catch(error){
        console.log(error)
        res.status(500).json({ message:error })
    }
}