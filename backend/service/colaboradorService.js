import Colaborador from "../models/colaborador.js";
import Endereco from "../models/endereco.js";
import DadosAcademicos from "../models/Dados_Academicos.js";
import PessoaJuridica from "../models/pessoa_juridica.js";





export const atualizarColaborador = async(colabId, colabDados, objDadosAcademicos, objEndereco, t)=>{

    const dadosColab = await Colaborador.update(colabDados,{
        where:{
            id:colabId
        },
        transaction:t
    })

    const dadosAcademicos = await DadosAcademicos.findOne({
        where:{
            colaborador_id:colabId
        }
    }).then(id=>{
        if(id){
            return DadosAcademicos.update( objDadosAcademicos ,{
                where:{
                    colaborador_id:colabId
                },
                transaction:t
            })
        }
    else{
        return DadosAcademicos.create( objDadosAcademicos,{transaction:t} )
    }
    })

    const dadosEndereco = await Endereco.findOne({
        where:{
            colaborador_id:colabId
        }
    }).then(id=>{
        if(id){
            return Endereco.update(objEndereco,
            {
                where:{
                    colaborador_id:colabId
            },
            transaction:t
        })
    }else{
        return Endereco.create(objEndereco,{transaction:t})
        } 
    })

    await t.commit()

    return {dadosColab,dadosAcademicos,dadosEndereco}
}

export const atualizarColaboradorCnpj = async(colabId,objCnpj,t)=>{

    
    const dadosCnpj = await PessoaJuridica.findOne({
        where:{
            colaborador_id:colabId
        }
    }).then(id=>{
        if(id){
            return PessoaJuridica.update(objCnpj,{
                where:{
                    colaborador_id:colabId
                },
                transaction:t
            })
        }
    else{
        return PessoaJuridica.create(objCnpj,{transaction:t})
    }
    })
    await t.commit()

    return {dadosCnpj}
}
 