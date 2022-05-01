import Cargos from "../models/cargo.js"
import Colaborador from "../models/colaborador.js"
import Departamento from "../models/departamentos.js"

export const departDados = async () => {
    return await Departamento.findAll( {
    attributes:['ID','area','head'],
    include:{
        model:Cargos,
        attributes:['ID','cargo','Departamento_ID'],
        include:{
            model:Colaborador,
            attributes:['ID']
        }
    },
})
}

export const createDepart = async (area) => {
    return await Departamento.create( { area } )
}

export const pegarCargoDepart = async(id) =>{
    const GetcargoDepart = await Departamento.findOne({
        
        include:[{
            model:Cargos,
                attributes:['id','cargo','Departamento_ID'],
            include:{
                model:Colaborador,
                attributes:['id','nome','email','telefone']
            }
        }],
        attributes:['id','area'],
        where:{id}
    })
    return GetcargoDepart
}