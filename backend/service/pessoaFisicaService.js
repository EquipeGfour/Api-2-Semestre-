import pessoafisica from "../models/pessoafisica.js"
import Colaborador from "../models/colaborador.js"
import Contrato from "../models/contrato.js"

export const createPessoaFisica = async(dados, t) =>{
    const res = await pessoafisica.create(dados,{
        include:[{
            model:Colaborador
        }],
        transaction:t
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

export const findAllPessoaFisica = async () =>{
    const pessoa = await pessoafisica.findAll({
        include:Colaborador
    });
    return pessoa
}



