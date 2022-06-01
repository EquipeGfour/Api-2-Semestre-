import Arquivos from "../models/arquivos.js"
import Colaborador from "../models/colaborador.js"
import Aula from '../models/aula.js'

export const inserirArquivo = async (name,ext,id,tipo) => {
    let url_arquivo = ''
    if (process.env.STORAGE_TYPE === 's3'){
        url_arquivo =  `https://${process.env.BUCKET_NAME}.s3.${process.env.AWS_DEFAULT_REGION}.amazonaws.com/${name}${ext}`
    }
    const dados = await Arquivos.create({ 
        url_arquivo,
        nome_arquivos: name,
        extensao: ext,
        colaborador_id:id,
        tipo
    })
    return dados
}

export const pegarDadosArquivo = async (id) => {
    const dados = await Colaborador.findOne({
        where:{ id },
        include:{
            model:Arquivos,
            attributes:['id','nome_arquivos','extensao','url_arquivo','tipo','colaborador_id']
        },
        attributes:['id']
    })
    return dados
}

export const pegarArquivoById = async (id) => {
    const dados = await Arquivos.findOne({
        where:{ id }
    })
    return dados
}

export const dadosArquivoBaixar = async (id) => {
    const dados = await Arquivos.findOne({
        where:{
            id
        },
        attributes:['id','nome_arquivos','extensao','url_arquivo']
    })
    return dados
}

export const armazenarAulaMaterials = async (curso_id,titulo_aula,descricao_aula,tempo_aula,name,ext,tipo) => {
    let url_arquivo = ''

    if (process.env.STORAGE_TYPE === 's3'){
        url_arquivo =  `https://${process.env.BUCKET_NAME}.s3.${process.env.AWS_DEFAULT_REGION}.amazonaws.com/${name}${ext}`
    }

    const aula ={
        curso_id:curso_id,
        titulo_aula:titulo_aula,
        descricao_aula:descricao_aula,
        tempo_aula:tempo_aula,
        nome_aula_arq:name,
        extensao_aula:ext,
        url_arq_aula:url_arquivo,
        tipo_arq_aula: tipo

    }
    const dados = await Aula.create(aula)
    return dados

}