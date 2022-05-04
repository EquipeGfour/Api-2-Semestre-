import Cargos from "../models/cargo.js"
import Colaborador from "../models/colaborador.js"
import Departamento from "../models/departamentos.js"

export const departDados = async () => {
    return await Departamento.findAll( {
    attributes:['ID','area','head'],
    include:{
        model:Cargos,
        attributes:['ID','cargo','departamento_id'],
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