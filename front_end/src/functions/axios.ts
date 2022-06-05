import axios from "axios";
import M from 'materialize-css/dist/js/materialize'
import { Cookies } from "react-cookie"   

axios.interceptors.response.use(response=>{
    
    return response
},error=>{
    if (error.response.status === 401){
        window.location.replace('/')
        const cookie = new Cookies()
        cookie.remove('ionic-user')
        cookie.remove('ionic-JWT')
        M.toast({html:'Token Expirado! Faça o Login novamente', classes:"modalerro rounded"})
    }
    return Promise.reject(error)
})

export default axios