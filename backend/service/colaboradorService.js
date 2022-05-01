import Colaborador from "../models/colaborador.js";
import Endereco from "../models/endereco.js";
import DadosAcademicos from "../models/Dados_Academicos.js";
import PessoaJuridica from "../models/pessoa_juridica.js";
import Cargos from "../models/cargo.js";
import Departamento from "../models/departamentos.js";
import pessoafisica from "../models/pessoafisica.js";
import Contrato from "../models/contrato.js";

export const getTodosColab = async () => {
    const colaborador = await Colaborador.findAll();
    return colaborador;
}


export const atualizarColaborador = async(colabId, colabDados, objDadosAcademicos, objEndereco, t)=>{

    const dadosColab = await Colaborador.update(colabDados,{
        where:{
            id:colabId
        },
        transaction:t
    })

    const dadosAcademicos = await DadosAcademicos.findOne({
        where:{
            Colaborador_ID:colabId
        }
    }).then(id=>{
        if(id){
            return DadosAcademicos.update( objDadosAcademicos ,{
                where:{
                    Colaborador_ID:colabId
                },
                transaction:t
            })
        }
    else{
        return DadosAcademicos.create( objDadosAcademicos,{transaction:t} )
    }
    })

    const dadosEndereco = await Endereco.findOne({
        where:{
            Colaborador_ID:colabId
        }
    }).then(id=>{
        if(id){
            return Endereco.update(objEndereco,
            {
                where:{
                    Colaborador_ID:colabId
            },
            transaction:t
        })
    }else{
        return Endereco.create(objEndereco,{transaction:t})
        } 
    })

    await t.commit()

    return {dadosColab,dadosAcademicos,dadosEndereco}
}

export const atualizarColaboradorCnpj = async(colabId,objCnpj,t)=>{

    
    const dadosCnpj = await PessoaJuridica.findOne({
        where:{
            Colaborador_ID:colabId
        }
    }).then(id=>{
        if(id){
            return PessoaJuridica.update(objCnpj,{
                where:{
                    Colaborador_ID:colabId
                },
                transaction:t
            })
        }
    else{
        return PessoaJuridica.create(objCnpj,{transaction:t})
    }
    })
    await t.commit()

    return {dadosCnpj}
}

export const Geralfuncionarios = async () => {
    const dadosfuncionarios = await Colaborador.findAll({
        attributes: ['nome', 'telefone', 'ID', 'email'],
        include: {
            model: Cargos,
            attributes: ['cargo', 'ID'],
            include: {
                model: Departamento,
                attributes: ['area', 'ID']
            },
        }
    });
    return dadosfuncionarios;
}

export const PegarCargoColab = async (ID) => {
    const pegarCargoColabs = await Colaborador.findAll({
        include: {
            model: Cargos,
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
    return pegarCargoColabs;
}

export const pegarColabById = async (ID) => {
    const pegarColab = await Colaborador.findAll({
        where: {
                ID
            },
        include: [
            {
                model: Colaborador,
                as: 'Gestor'
            },
            {
                model: pessoafisica,
                attributes: ['cpf', 'Colaborador_ID']
            },
            {
                model: Endereco,
                attributes: ['ID', 'estado', 'cidade', 'bairro', 'cep', 'complemento', 'regiao']
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
                model: Cargos,
                attributes: ['cargo', 'ID'],
                include: {
                    model: Departamento,
                    attributes: ['area', 'ID']
                }
            }
        ]
    })
    return pegarColab;
}

export const getGestorById = async (id) =>{
    const pegarGestorId = await Colaborador.findOne({
        where: {
            id
        },
        attributes: ['id', 'nome'],
        include: {
            model: Colaborador, as: 'funcionarios',
            attributes: ['id', 'nome', ['gestor_ID', 'pid']],
        }
    })
    return pegarGestorId;
}