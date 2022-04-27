import Arquivos from "../models/arquivos.js"

export const inserirArquivo = async (name,ext,id) => {
    const dados = await Arquivos.create({ 
        nome_arquivos: name,
        extensao: ext,
        Colaborador_ID:id
    })
    return dados
}