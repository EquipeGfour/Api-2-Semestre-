import Cookies from 'universal-cookie'


export const CriaHeader = () =>{
    const cookies = new Cookies()
    
    return{
        "x-access-token":cookies.get('ionic-JWT')
    }

}