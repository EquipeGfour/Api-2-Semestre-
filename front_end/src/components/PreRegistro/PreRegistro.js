import React from "react"
import {Link,Navigate,useNavigate} from 'react-router-dom';
import "./style.css"

function PreRegistro1 (){
    return(

        <div className="acessoContainer">
        <h1>Pré-Registro</h1>
    <div className="centralizar">
       <div className="row">
            <div className="input-field col s12">
            <input placerholder="Nome Completo" id="first_name2" type="text" className="validate"/>
            <label className="active" for="first_name2">Nome</label>
            </div>
        </div>

        <div className="row">
            <div className="input-field col s12">
            <input placerholder="Email" id="first_name2" type="text" className="validate"/>
            <label className="active" for="first_name2">Email</label>
            </div>
        </div>

        <div className="row">
            <div className="input-field col s12">
            <input placerholder="CPF" id="first_name2" type="text" className="validate"/>
            <label className="active" for="first_name2">CPF</label>
            </div>
        </div>


        <a className="waves-effect waves-light btn-large btnAzul">Registrar</a>

    </div> 
    </div>
    )
        
    

}

export default PreRegistro1