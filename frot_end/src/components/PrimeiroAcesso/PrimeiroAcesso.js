import React from "react"
import "./style.css"

function PrimeiroAcesso (){
    return(

        <div className="acessoContainer">
        <h1>Primeiro Acesso</h1>
    <div className="centralizar">
       <div className="row">
            <div className="input-field col s12">
            <input value="Nome Completo" id="first_name2" type="text" className="validate"/>
            <label className="active" for="first_name2">Nome</label>
            </div>
        </div>

        <div className="row">
            <div className="input-field col s12">
            <input value="CPF" id="first_name2" type="text" className="validate"/>
            <label className="active" for="first_name2">CPF</label>
            </div>
        </div>
        <a className="waves-effect waves-light btn-large btnAzul">Registrar</a>

    </div> 
    </div>
    )
        
    

}

export default PrimeiroAcesso