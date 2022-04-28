import React from "react"
import "./style.css"
import {Link,Navigate,useNavigate} from 'react-router-dom';
import colabbranco from "../img/colabbranco.png";
import organogramabranco from '../img/organogramabranco.png'
import trilhabranco from '../img/trilhabranco.png'
import holeritebranco from '../img/holeritebranco.png'
import desligadobranco from '../img/desligadobranco.png'
import PreRegistrobranco from '../img/preregistrobranco.png'
import {useCookies} from 'react-cookie'
import GeralFunc from "../geralFunc/geralFunc";
import PreRegistro1 from "../PreRegistro/PreRegistro";

const Home: React.FC=()=>{

    const [cookie,setCookie]=useCookies(['ionic-user'])
    React.useEffect(()=>{
        document.title='Home Admin'
    },[])

    return(
    <div className="loginContainer">
            <h3>Bem-Vindo Administrador</h3>       
        
        <div className="row blocoCima">        
            <div className="col s12 m4 l4 divColab">
                <Link to="/geral-funcionarios"   >                   
                <button className=" waves-effect  botaoFunc"> <img className="imgColab" src={colabbranco}></img></button>
                </Link>  
                <div className="btnNomeHome">Colaboradores e Departamentos</div>
            </div>

            <div className="col s12 m4 l4">
            <button className="waves-effect botaoFunc"><img className="imgColab" src={organogramabranco}></img></button>
                <div className="btnNomeHome">Organograma</div>            
            </div>

            <div className="col s12 m4 l4">
            <button className="waves-effect botaoFunc"><img className="imgColab" src={trilhabranco}></img></button>
                <div className="btnNomeHome">Desenvolvimento</div>
            </div>
        </div>

        
        <div className="row blocoBaixo">
            <div className=" col s12 m4 l4">
                <button className="waves-effect botaoFunc"><img className="imgColab" src={desligadobranco}></img></button>
                <div className="btnNomeHome">Desligados</div>
            </div>

            <div className="col s12 m4 l4">
                <button className="waves-effect botaoFunc"><img className="imgColab" src={holeritebranco}></img></button>
                <div className="btnNomeHome">Financeiro</div>
            </div>

            <div className="col s12 m4 l4">
                <Link to="/pre-registro">
                <button className="waves-effect botaoFunc" ><img className="imgColab" src={PreRegistrobranco}></img></button>
                </Link>
                <div className="btnNomeHome">Pré-Registro</div>
            </div>
        </div>     
        
    </div>  
)
}

export default Home