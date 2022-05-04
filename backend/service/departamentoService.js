import Cargos from "../models/cargo.js"
import Colaborador from "../models/colaborador.js"
import Departamento from "../models/departamentos.js"

export const departDados = async () => {
    return await Departamento.findAll( {
    attributes:['id','area','head'],
    include:{
        model:Cargos,
        attributes:['id','cargo','departamento_id'],
        include:{
            model:Colaborador,
            attributes:['id']
        }
    },
})
}

export const createDepart = async (area) => {
    return await Departamento.create( { area } )
}