import PessoaJuridica from "../models/pessoa_juridica.js"

export const createPessoaJuridica = async (dados,t) => {
    const res = await PessoaJuridica.create(dados,{
        include: [{
        association: PessoaJuridica.Colaborador}],
        transaction:t
    })
    await t.commit()
    return res
}