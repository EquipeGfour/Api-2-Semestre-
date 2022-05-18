import Colaborador from "../models/colaborador.js";
import Cargo from "../models/cargo.js";
import Departamento from "../models/departamentos.js";
import sequelize from "../config/db.js";
import { findAllPessoaFisica } from "../service/pessoaFisicaService.js";
import { atualizarColaborador, atualizarColaboradorCnpj } from "../service/colaboradorService.js";
import pessoafisica from "../models/pessoafisica.js";
import Endereco from "../models/endereco.js";
import DadosAcademicos from "../models/Dados_Academicos.js";
import Contrato from "../models/contrato.js";
import { Op } from "sequelize";

export const getAllColaborador = async (req, res) => {
    try {
        const colaborador = await Colaborador.findAll();
        res.json(colaborador);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const testePessoaFisica = async (req, res) => {
    try {
        const pessoafisica = await findAllPessoaFisica()
        res.json(pessoafisica)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const testeCargo = async (req, res) => {
    try {
        const dados = await Colaborador.findAll({
            attributes: ['nome', 'telefone', 'id', 'email'],
            include: {
                model: Cargo,
                attributes: ['cargo', 'id'],
                include: {
                    model: Departamento,
                    attributes: ['area', 'id']
                },
            }
        });
        res.json(dados)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const inserirDadosColab = async (req, res) => {
    const t = await sequelize.transaction();
    try {
        const colabId = req.body.id
        const objColab = {
            id: req.body.id,
            nome: req.body.nome,
            rg:req.body.rg,
            email: req.body.email,
            nacionalidade: req.body.nacionalidade,
            naturalidade: req.body.naturalidade,
            estado_civil: req.body.estado_civil,
            genero: req.body.genero,
            raca: req.body.raca,
            telefone: req.body.telefone,
            data_nascimento: req.body.data_nascimento,
            status:"Ativo"
        }
        const objDadosAcademicos = {
            formacao: req.body.formacao,
            cursos: req.body.cursos,
            linguas: req.body.linguas,
            colaborador_id: req.body.id
        }
        const objEndereco = {
            rua: req.body.rua,
            estado: req.body.estado,
            cep: req.body.cep,
            regiao: req.body.regiao,
            cidade: req.body.cidade,
            bairro: req.body.bairro,
            complemento: req.body.complemento,
            colaborador_id: req.body.id
        }
        const dados = await atualizarColaborador(colabId, objColab, objDadosAcademicos, objEndereco, t)
        res.json(dados)
    } catch (error) {
        await t.rollback()
        res.status(400).json({ message: error.message });
    }
}

export const inserirDadosColabCnpj = async (req, res) => {
    const t = await sequelize.transaction();
    try {
        console.log(res.body)
        const colabId = req.body.id
        const objCnpj = {
            cnpj: req.body.cnpj,
            empresa_contratada: req.body.empresa_contratada,
            tempo_formalizacao: req.body.tempo_formalizacao,
            natureza_juridica: req.body.natureza_juridica,
            data_fundacao: req.body.data_fundacao
        }
        const dadosCnpj = await atualizarColaboradorCnpj(colabId, objCnpj, t)
        res.json(dadosCnpj)
    } catch (error) {
        await t.rollback()
        console.log(error)
        res.status(400).json({ message: error.message });
    }
}


export const geralFunc = async (req, res) => {
    try {
        const dados = await Colaborador.findAll({
            attributes: ['nome', 'telefone', 'id', 'email'],
            where:{status:'Ativo'},
            include: {
                model: Cargo,
                attributes: ['cargo', 'id'],
                include: {
                    model: Departamento,
                    attributes: ['area', 'id']
                },
            }
        });
        res.json({ dados })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getCargoColaborador = async (req, res) => {
    try {
        const cargo_colab = await Colaborador.findAll({
            include: {
                model: Cargo,
                include: {
                    model: Departamento,
                    where: {
                        id: req.params.id
                    },
                    required: true
                },
                required: true
            }
        });
        res.json(cargo_colab)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


export const getColaboradorById = async (req, res) => {
    try {
        const colab = await Colaborador.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Colaborador, as: 'Gestor'
                },
                {
                    model: pessoafisica,
                    attributes: ['cpf', 'colaborador_id']
                },
                {
                    model: Endereco,
                    attributes: ['id', 'rua', 'estado', 'cidade', 'bairro', 'cep', 'complemento', 'regiao']
                },
                {
                    model: DadosAcademicos,
                    as: "DadosAcademicos",
                    attributes: ['id', 'formacao', 'cursos',
                        ['linguas', 'Idiomas'], 'termo_pi']
                },
                {
                    model: Contrato,
                    attributes: ['id', 'faixa_salarial', 'auxilio_creche', 'vale_refeicao',
                        'distrato', 'contrato_trabalho', 'codigo_conduta_etica', 'vale_transporte',
                        'data_Admissao', 'plano_saude']
                },
                {
                    model: Cargo,
                    attributes: ['cargo', 'id'],
                    include: {
                        model: Departamento,
                        attributes: ['area', 'id']
                    }
                }
            ]
        })
        res.json(colab)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const pegarGestorById = async (req, res) => {
    try {
        const id = req.params.id
        const dados = await Colaborador.findOne({
            where: {
                id
            },
            attributes: ['id', 'nome'],
            include: {
                model: Colaborador, as: 'funcionarios',
                attributes: ['id', 'nome', ['gestor_id', 'pid']],
                include: {
                    model:Cargo,
                    include:{
                        model:Departamento
                    }
                
            }
        }
        })
        console.log(dados)
        const result = dados.dataValues.funcionarios.map(f=>f.dataValues)
        delete dados.dataValues.funcionarios
        
        res.json([dados.dataValues, ...result])
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const updateColabForDelete = async (req,res) => {
    try{
        const valores = { gestor_id:null, status:"Desligado" }
        const condicao = { where:{ id:req.params.id } }
        const dados = await Colaborador.update( valores, condicao )
        res.json('Dados Atualizados')
    }catch(error){
        console.log(error)
        res.status(500).json({ message:error })
    }
}

export const getDesligados = async (req,res) =>{
    try{
        const dados = await Colaborador.findAll({
            where:{ status: 'Desligado' },
            attributes:['id','nome','email','telefone'],
            include:[
                {
                    model:Cargo,
                    attributes:['id','cargo']
                },
                {
                    model:Contrato,
                    attributes:['id','data_Admissao']
                }
            ]
        })
        res.json(dados)
    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const getHead = async (req,res) =>{
    try{
        const dados = await Colaborador.findAll({
            where:{
                nome:{ [Op.like]: `%${req.query.gestor}%` },
            },
            attributes:['id','nome']
        })
        res.json(dados)  
        }catch(error){
            console.log(error)
            res.status(500).json({ message:error })
        }
}

export const searchDesligado = async (req,res) => {
    try{
        const dados = await Colaborador.findAll({
            where:{
                status:'Desligado',
                nome:{ [Op.like]: `%${req.query.nome}%` }
            },
            attributes:['id','nome','status']
        })
        res.json(dados)
    }catch(error){
        res.status(500).json({ message:error })
    }
}