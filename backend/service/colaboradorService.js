import Colaborador from "../models/colaborador.js";
import Endereco from "../models/endereco.js";
import DadosAcademicos from "../models/Dados_Academicos.js";





export const atualizarColaborador = async(colabId, colabDados, objDadosAcademicos, objEndereco, t)=>{

    const dadosColab = await Colaborador.update(colabDados,{
        where:{
            id:colabId
        },
        transaction:t
    })

    const dadosAcademicos = await DadosAcademicos.findOne({
        where:{
            Colaborador_ID:colabId
        }
    }).then(id=>{
        if(id){
            return DadosAcademicos.update( objDadosAcademicos ,{
                where:{
                    Colaborador_ID:colabId
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
            Colaborador_ID:colabId
        }
    }).then(id=>{
        if(id){
            return Endereco.update(objEndereco,
            {
                where:{
                    Colaborador_ID:colabId
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