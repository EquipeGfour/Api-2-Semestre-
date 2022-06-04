import Colaborador from "../models/colaborador.js";
import Endereco from "../models/endereco.js";
import DadosAcademicos from "../models/Dados_Academicos.js";
import PessoaJuridica from "../models/pessoa_juridica.js";
import { sendMail } from "../functions/pesquisaDesligamento.js";





export const atualizarColaborador = async(colabId, colabDados, objDadosAcademicos, objEndereco, t)=>{
    //atualizar dados do colaborador
    const dadosColab = await Colaborador.update(colabDados,{
        where:{
            id:colabId
        },
        transaction:t
    })

    //atualizar ou criar dados Academicos
    // const dadosAcademicos = await DadosAcademicos.findOne({
    //     where:{
    //         colaborador_id:colabId
    //     }
    // }).then(id=>{
    //     if(id){
    //         return DadosAcademicos.update( objDadosAcademicos ,{
    //             where:{
    //                 colaborador_id:colabId
    //             },
    //             transaction:t
    //         })
    //     }
        
    // else{
    //     return DadosAcademicos.bulkCreate( objDadosAcademicos,{transaction:t} )
    // }
    // })

    const dadosAcademicos = await DadosAcademicos.bulkCreate( objDadosAcademicos, {transaction:t})

    //atualizar ou criar dados Endereço
    const dadosEndereco = await Endereco.upsert(objEndereco,
        {
        transaction:t
    })

    await t.commit()

    return {dadosColab,dadosAcademicos,dadosEndereco}
}

export const atualizarColaboradorCnpj = async(colabId,colabDados,objEndereco,objCnpj,t)=>{
    //atualizar dados do colaborador
    const dadosColab = await Colaborador.findByPk(colabId).then(async colab =>{
        colab.update(colabDados)
        await colab.save()
        return colab
    })
    //atualizar ou criar dados CNPJ
    const dadosCnpj = await PessoaJuridica.upsert(objCnpj,{
        transaction:t
    })

    //atualizar ou criar dados Endereço
    const dadosEndereco = await Endereco.upsert(objEndereco,
        {
        transaction:t
    })
    await t.commit()

    return {dadosCnpj, dadosColab, dadosEndereco}
}

export const getEmailColaborador = (email)=>{
    sendMail(email)
    return email
}


