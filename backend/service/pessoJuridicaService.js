import Colaborador from "../models/colaborador.js"
import Contrato from "../models/contrato.js"
import PessoaJuridica from "../models/pessoa_juridica.js"

export const createPessoaJuridica = async (dados, t) => {

    const cnpj = await PessoaJuridica.create({
        cnpj:dados.cnpj,
        colaborador: {
            ...dados,
            contrato: {
                data_Admissao:new Date().toISOString().slice(0,10)
            }
        }
    },{
        transaction: t,
        include: {
            model: Colaborador,
            include: {
                model: Contrato
            }
        }
    })
    //await t.commit()
    //console.log(cnpj)
    // console.log(cnpj)

    // const res = await Colaborador.create(dados, {
    //     transaction: t

    // })

    const contratoAdmissao = await Contrato.create({
        colaborador_id:cnpj.dataValues.colaborador.dataValues.id,
        data_Admissao:new Date().toISOString().slice(0,10)
    },{
        transaction:t
    })
    const pessoaJuridica = {...cnpj.dataValues}
    const colaborador = {...cnpj.dataValues.colaborador.dataValues}
    delete pessoaJuridica.colaborador
    const objFinal = {
        pessoaJuridica,
        colaborador,
        contrato: {...contratoAdmissao.dataValues}
    }
    
    await t.commit()
    return objFinal
}