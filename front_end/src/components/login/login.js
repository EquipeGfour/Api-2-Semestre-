import React, { useState } from "react"
import "./style.css"
import axios from "axios"



function Login(){

    const [email, setEmail] = useState('');
    const [senha,setSenha] = useState('');

    
    const getLogin = async () =>{
        
        const res = await axios.post('http://localhost:5000/login/',{
            email: email,
            senha: senha})
            console.log(res.data)
    } 

    return(
        <div className="loginContainer">
            <h1>Login</h1>
        <div className="centralizar">
           <div className="row">
                <div className="input-field col s12">
                <input value={email} id="first_name2" type="text" className="validate" onChange={ (e) => setEmail(e.target.value) }/>
                <label className="active" for="first_name2">Email</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12">
                <input value={senha} id="first_name2" type="text" className="validate" onChange={ (e) => setSenha(e.target.value) }/>
                <label className="active" for="first_name2">Senha</label>
                </div>
            </div>
            <a className="waves-effect waves-light btn-large btnAzul" onClick={getLogin}>Entrar</a>

        </div> 
        </div>

        
    )
}

export default Login