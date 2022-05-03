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
            attributes: ['nome', 'telefone', 'ID', 'email'],
            include: {
                model: Cargo,
                attributes: ['cargo', 'ID'],
                include: {
                    model: Departamento,
                    attributes: ['area', 'ID']
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
            email: req.body.email,
            nacionalidade: req.body.nacionalidade,
            naturalidade: req.body.naturalidade,
            estado_civil: req.body.estado_civil,
            genero: req.body.genero,
            raca: req.body.raca,
            telefone: req.body.telefone,
            data_nascimento: req.body.data_nascimento,
        }
        const objDadosAcademicos = {
            formacao: req.body.formacao,
            cursos: req.body.cursos,
            linguas: req.body.linguas,
            Colaborador_ID: req.body.id
        }
        const objEndereco = {
            rua: req.body.rua,
            estado: req.body.estado,
            cep: req.body.cep,
            regiao: req.body.regiao,
            cidade: req.body.cidade,
            bairro: req.body.bairro,
            complemento: req.body.complemento,
            Colaborador_ID: req.body.id
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
            attributes: ['nome', 'telefone', 'ID', 'email'],
            include: {
                model: Cargo,
                attributes: ['cargo', 'ID'],
                include: {
                    model: Departamento,
                    attributes: ['area', 'ID']
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
                        ID: req.params.id
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
                ID: req.params.id
            },
            include: [
                {
                    model: Colaborador, as: 'Gestor'
                },
                {
                    model: pessoafisica,
                    attributes: ['cpf', 'Colaborador_ID']
                },
                {
                    model: Endereco,
                    attributes: ['ID', 'rua', 'estado', 'cidade', 'bairro', 'cep', 'complemento', 'regiao']
                },
                {
                    model: DadosAcademicos,
                    as: "DadosAcademicos",
                    attributes: ['ID', 'formacao', 'cursos',
                        ['linguas', 'Idiomas'], 'termo_PI']
                },
                {
                    model: Contrato,
                    attributes: ['ID', 'faixa_salarial', 'auxilio_creche', 'vale_refeicao',
                        'distrato', 'contrato_trabalho', 'codigo_conduta_etica', 'vale_transporte',
                        'data_Admissao', 'plano_saude']
                },
                {
                    model: Cargo,
                    attributes: ['cargo', 'ID'],
                    include: {
                        model: Departamento,
                        attributes: ['area', 'ID']
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
                attributes: ['id', 'nome', ['gestor_ID', 'pid']],
            }
        })
        const result = dados.dataValues.funcionarios.map(f=>f.dataValues)
        delete dados.dataValues.funcionarios
        res.json([dados.dataValues, ...result])
    } catch (error) {
        res.status(500).json({ message: error })
    }
}



