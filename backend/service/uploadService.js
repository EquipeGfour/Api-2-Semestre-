import Arquivos from "../models/arquivos.js"
import Colaborador from "../models/colaborador.js"

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

export const dadosArquivoBaixar = async (id,colaborador_id) => {
    const dados = await Arquivos.findOne({
        where:{
            id,
            colaborador_id
        },
        attributes:['id','nome_arquivos','extensao']
    })
    return dados
}