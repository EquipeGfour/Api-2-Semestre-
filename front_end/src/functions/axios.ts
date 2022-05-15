import axios from "axios";
import M from 'materialize-css/dist/js/materialize'

axios.interceptors.response.use(response=>{
    return response
},error=>{
    if (error.response.status === 401){
        window.location.replace('/')
        M.toast({html:'Token Expirado! Faça o Login novamente', classes:"modalerro rounded"})
    }
})

export default axios