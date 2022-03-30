import React from "react"
import "./style.css"
function Login(){
    return(
        <div className="loginContainer">
            <h1>Login</h1>
        <div className="centralizar">
           <div className="row">
                <div className="input-field col s12">
                <input value="Email" id="first_name2" type="text" className="validate"/>
                <label className="active" for="first_name2">Email</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12">
                <input value="Senha" id="first_name2" type="text" className="validate"/>
                <label className="active" for="first_name2">Senha</label>
                </div>
            </div>
            <a className="waves-effect waves-light btn-large btnAzul">Entrar</a>

        </div> 
        </div>

        
    )
}

export default Login