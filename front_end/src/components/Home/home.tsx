import React from "react"
import "./style.css"
import {Link,Navigate,useNavigate} from 'react-router-dom';
import colabbranco from "../img/colabbranco.png";
import organogramabranco from '../img/organogramabranco.png'
import trilhabranco from '../img/trilhabranco.png'
import holeritebranco from '../img/holeritebranco.png'
import desligadobranco from '../img/desligadobranco.png'
import PreRegistrobranco from '../img/preregistrobranco.png'
import departamento from '../img/departamento.png'
import {useCookies} from 'react-cookie'
import GeralFunc from "../geralFunc/geralFunc";
import PreRegistro1 from "../PreRegistro/PreRegistro";
import axios from "../../functions/axios";


const Home: React.FC=()=>{

    const [cookie,setCookie]=useCookies(['ionic-user'])
    React.useEffect(()=>{
        document.title='Home Admin'
    },[])

    return(
    <div className="loginContainer titulo">
            <h3>Bem-Vindo Administrador</h3>       
        
        <div className="row blocoCima">        
            <div className="col s12 m4 l4 divColab">
            <Link to="/geral-funcionarios"   >                   
                <button className=" waves-effect  botaoFunc"> <img className="imgColab" src={colabbranco}></img></button>
            </Link>  
                <div className="btnNomeHome">Colaboradores</div>
            </div>

            <div className="col s12 m4 l4">
                <Link to='/geral-departamentos'>
                <button className="waves-effect botaoFunc"><img className="imgColab" src={departamento}></img></button>
                </Link>
                <div className="btnNomeHome">Departamentos</div>
            </div>

            <div className="col s12 m4 l4">
                <Link to="/pre-registro">
                <button className="waves-effect botaoFunc" ><img className="imgColab" src={PreRegistrobranco}></img></button>
                </Link>
                <div className="btnNomeHome">Pré-Registro</div>
            </div>




        </div>

        <hr className="linha"></hr>
        
        <div className="row blocoBaixo">            
        <div className="col s12 m4 l4">
            <Link to="/trilha">
                <button className="waves-effect botaoFunc"><img className="imgColab" src={trilhabranco}></img></button>
                <div className="btnNomeHome">Trilha</div>
            </Link>
            </div>            

            <div className="col s12 m4 l4">
            <Link to="/organograma">
                <button className="waves-effect botaoFunc"><img className="imgColab" src={organogramabranco}></img></button>
                <div className="btnNomeHome">Organograma</div>
            </Link>             
            </div>

            <div className=" col s12 m4 l4">
                <Link to="/desligados">
                <button className="waves-effect botaoFunc"><img className="imgColab" src={desligadobranco}></img></button>                
                <div className="btnNomeHome">Desligados</div>
                </Link>                
            </div>
        </div>     
        
    </div>  
)
}

export default Home