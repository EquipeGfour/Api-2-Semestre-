import React from "react"
import "./style.css"
import {Link,Navigate,useNavigate} from 'react-router-dom';
import Colab from '../img/colab.png'
import Organograma from '../img/organograma.png'
import Trilha from '../img/trilha.png'
import Holerite from '../img/holerite.png'
import Desligado from '../img/desligado.png'
import PreRegistro from '../img/preregistro.png'
import {useCookies} from 'react-cookie'
import GeralFunc from "../geralFunc/geralFunc";
import PreRegistro1 from "../PreRegistro/PreRegistro";


const Home: React.FC=()=>{

    const [cookie,setCookie]=useCookies(['ionic-user'])
    React.useEffect(()=>{
        console.log(cookie['ionic-user'])
    },[])

    return(
    <div className="loginContainer">
            <h3>Bem-Vindo Administrador</h3>       
        
        <div className="row blocoCima">        
            <div className="col s4 divColab">
                <Link to="/geral-funcionarios"   >                   
                <button className=" waves-effect  botaoFunc"> <img className="imgColab" src={Colab}></img></button>
                </Link>  
                <div className="btnNome">Colaborador</div>
            </div>

            <div className="col s4">
            <button className="waves-effect botaoFunc"><img className="imgColab" src={Organograma}></img></button>
                <div className="btnNome">Organograma</div>            
            </div>

            <div className="col s4">
            <button className="waves-effect botaoFunc"><img className="imgColab" src={Trilha}></img></button>
                <div className="btnNome">Desenvolvimento</div>
            </div>
        </div>

        
        <div className="row blocoBaixo">
            <div className=" col s4">
                <button className="waves-effect botaoFunc"><img className="imgColab" src={Desligado}></img></button>
                <div className="btnNome">Desligados</div>
            </div>

            <div className="col s4">
                <button className="waves-effect botaoFunc"><img className="imgColab" src={Holerite}></img></button>
                <div className="btnNome">Financeiro</div>
            </div>

            <div className="col s4">
                <Link to="/pre-registro">
                <button className="waves-effect botaoFunc" ><img className="imgColab" src={PreRegistro}></img></button>
                </Link>
                <div className="btnNome">Pré-Registro</div>
            </div>
        </div>     
        
    </div>  
)
}

export default Home