import React from 'react'
import './style.css'
import Img from '../img/IonicLogo.png'
import{TiSocialFacebookCircular} from "react-icons/ti"
import Youtube from '../img/youtube.png'
import Facebook from '../img/facebook.png'
import Linkedin from '../img/linkedin.png'
import Instagram from '../img/instagram.png'
import {useCookies} from 'react-cookie'
import GeralDep from "../geralDepartamento/geralDep"
import M from 'materialize-css/dist/js/materialize'
import {Link,Navigate,useNavigate} from 'react-router-dom';
import ReactTooltip from 'react-tooltip'
import axios from "../../functions/axios";


const NavBar:React.FC=(props)=>{
    const navigate=useNavigate()
    const [cookie,setCookie,removeCookie] = useCookies(['ionic-user'])
    const [logout,setLogout] = React.useState(false)
    const [user,setUser] = React.useState<any>()

    React.useEffect(()=>{
        const logado = cookie['ionic-user']
        if(logado){
            setUser(logado)
            setLogout(true)
            console.log(logado)
        }else{
            setUser({})
            console.log('não logado')
            
        }        
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, Option);
    })

    const Desloga=()=>{
        removeCookie('ionic-user')
        setLogout(false)
        M.toast({html:'Deslogado com Sucesso!',classes:"modalerro rounded"})
        navigate('/')
    }

return(

//---------Social Media-----------//
<div className='geral'> 


    <div className= "socialbar">
        <a href="https://www.youtube.com/channel/UCtR3U-Qmb1h2GE9w0Fe3NrA" target="_blank" className="link-9">            
        <img className='youtube' src={Youtube}></img> </a>

        <a href="https://www.linkedin.com/company/ionichealth/" target="_blank" className="link-9">            
        <img className='youtube' src={Linkedin}></img> </a>

        <a href="https://www.facebook.com/ionic.health" target="_blank" className="link-9">            
        <img className='youtube' src={Facebook}></img> </a>           

        <a href="https://www.instagram.com/ionic.health/" target="_blank" className="link-9">            
        <img className='youtube' src={Instagram}></img> </a>
    </div>
    

    <nav>
        <div className="nav-wrapper navbarBackground" >
                  
                <a href="!" className="brand-logo"><img src={Img}></img></a>  
                {logout?(
                <>
                         
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons sideNavBar">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                
                                
                    {user.cargo === 'Administrador' || user.cargo === 'Gestor'?(
                    <><li><Link className='botaoLog' to={'/home-admin'}>Home</Link></li>               
                    <li><Link className='botaoLog' to={'/geral-departamentos'}>Departamentos</Link></li>
                    <li><Link className='botaoLog' to={'/geral-funcionarios'}>Colaboradores</Link></li>               
                    <li><Link className='botaoLog' to={'/desligados'}>Desligados</Link></li>
                    <li><Link className='botaoLog' to={'/trilha'}>Trilha</Link></li></>):null}                
                    <li><a className='botaoLog '><i className='material-icons logout' title='Deslogar' onClick={Desloga}>exit_to_app</i></a></li>               
                </ul></>):null}    
        </div>

    </nav>
                <ul className="sidenav navBarMenu" id="mobile-demo">
                    <li><Link className='botaoLog' to={'/home-admin'}>Home</Link></li>               
                    <li><Link className='botaoLog' to={'/geral-departamentos'}>Departamentos</Link></li>
                    <li><Link className='botaoLog' to={'/geral-funcionarios'}>Colaboradores</Link></li>               
                    <li><Link className='botaoLog' to={'/desligados'}>Desligados</Link></li>
                    <li><Link className='botaoLog' to={'/trilha'}>Trilha</Link></li>
                    <li><a className='botaoLog' onClick={Desloga}>Logout</a></li>          
                </ul> 
</div>
)
}

export default NavBar