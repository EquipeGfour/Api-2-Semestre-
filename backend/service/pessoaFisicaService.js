import pessoafisica from "../models/pessoafisica.js"
import Colaborador from "../models/colaborador.js"

export const createPessoaFisica = async(dados) =>{
    const res = await pessoafisica.create(dados,{
        include: [{
        association: pessoafisica.Colaborador}]
    })
    return res
}

export const findAllPessoaFisica = async () =>{
    const pessoafisica = await pessoafisica.findAll({
        include:Colaborador
    });
    return pessoafisica
}



