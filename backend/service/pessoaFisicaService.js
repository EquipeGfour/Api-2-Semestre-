import pessoafisica from "../models/pessoafisica.js"
import Colaborador from "../models/colaborador.js"

export const createPessoaFisica = async(dados) =>{
    const res = await pessoafisica.create(dados,{
        include:Colaborador
    })
    return res
}

export const findAllPessoaFisica = async () =>{
    const pessoa = await pessoafisica.findAll({
        include:Colaborador
    });
    return pessoa
}



