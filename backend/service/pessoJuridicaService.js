import Colaborador from "../models/colaborador.js"
import Contrato from "../models/contrato.js"
import PessoaJuridica from "../models/pessoa_juridica.js"

export const createPessoaJuridica = async (dados, t) => {
    const res = await PessoaJuridica.create(dados, {
        include: [{
            model: Colaborador,
        }],
        transaction: t
        
    })

    const contratoAdmissao = await Contrato.create({
        colaborador_id:res.dataValues.colaborador_id,
        data_Admissao:new Date().toISOString().slice(0,10)
    },{
        transaction:t
    })
    
    const d = {
        ...res.dataValues, 
        contrato: {...contratoAdmissao.dataValues}
    }
    
    await t.commit()
    return d
}