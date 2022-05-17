import React from "react"
import "./homeColab.css"
import {Link,Navigate,useNavigate} from 'react-router-dom';
import colabbranco from "../img/colabbranco.png";
import trilhabranco from '../img/trilhabranco.png'
import uploadfoto from '../img/upload.png'
import docfoto from '../img/documentos.png'
import {useCookies} from 'react-cookie'


const HomeColab: React.FC=()=>{

React.useEffect(()=>{
    document.title=`Home Colaborador`
},[])

    return(
    <div className="loginContainer titulo">
        <h3>Bem-Vindo Colaborador</h3>
    
    
        <div className="row blocoCima">
            <div className="col s12 m4 l3 divColab"></div>        
                <div className="col s12 m4 l3 divColab">
                <Link to="">                   
                    <button className=" waves-effect  botaoFunc"> <img className="imgColab" src={colabbranco}></img></button>
                </Link>  
                    <div className="btnNomeHome">Meu Perfil</div>
                </div>

                <div className="col s12 m4 l3">
                <Link to="/trilha">
                    <button className="waves-effect botaoFunc"><img className="imgColab" src={trilhabranco}></img></button>
                    <div className="btnNomeHome">Trilha</div>
                </Link>             
                </div>
                <div className="col s12 m4 l3 divColab"></div>  
        </div>

        <hr className="linhahomecolab"></hr>

        <div className="row blocoCima">
                <div className="col s12 m4 l3 divColab"></div>        
                <div className="col s12 m4 l3 divColab">
                <Link to="/upload"   >                   
                    <button className=" waves-effect  botaoFunc"> <img className="imgColab" src={uploadfoto}></img></button>
                </Link>  
                    <div className="btnNomeHome">Uploads</div>
                </div>

                <div className="col s12 m4 l3">
                <Link to="">
                    <button className="waves-effect botaoFunc"><img className="imgColab" src={docfoto}></img></button>
                    <div className="btnNomeHome">Documentos</div>
                </Link>             
                </div>
                <div className="col s12 m4 l3 divColab"></div>  
        </div>
    </div>
    )


}
export default HomeColab