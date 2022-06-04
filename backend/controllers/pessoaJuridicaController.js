import Colaborador from "../models/colaborador.js";
import PessoaJuridica from "../models/pessoa_juridica.js";

export const selectAllPj = async (req, res) => {
    try{

        const dados = await PessoaJuridica.findAll()
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