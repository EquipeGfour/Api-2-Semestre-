import Arquivos from "../models/arquivos.js"
import Colaborador from "../models/colaborador.js"

export const inserirArquivo = async (name,ext,id) => {
    const dados = await Arquivos.create({ 
        nome_arquivos: name,
        extensao: ext,
        colaborador_id:id
    })
    return dados
}

export const pegarDadosArquivo = async (id) => {
    const dados = await Colaborador.findOne({
        where:{ id },
        include:{
            model:Arquivos,
            attributes:['id','nome_arquivos','extensao','colaborador_id']
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