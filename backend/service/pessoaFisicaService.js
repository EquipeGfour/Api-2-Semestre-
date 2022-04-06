import pessoafisica from "../models/pessoafisica.js"

export const createPessoaFisica = async(dados) =>{
    const res = await pessoafisica.create(dados,{
        include: [{
        association: pessoafisica.Colaborador}]
    })
    return res
}



