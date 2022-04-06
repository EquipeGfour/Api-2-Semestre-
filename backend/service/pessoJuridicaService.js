import PessoaJuridica from "../models/pessoa_juridica.js"

export const createPessoaJuridica = async (dados) => {
    const res = await PessoaJuridica.create(dados,{
        include: [{
        association: PessoaJuridica.Colaborador}]
    })
    return res
}