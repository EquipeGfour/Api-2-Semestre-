import React, {Component} from 'react';
import {Link,Navigate,useNavigate} from 'react-router-dom';
import "./style.css"
import axios from "axios"

type state = {
    tela: string,
    email: string,
    senha: string,
    history?:any
}

const Login : React.FC=(props)=> {







    const navigate=useNavigate()
    const GetLogin = async () =>{
        
        navigate('dados-pessoais')

        
        // const res = await axios.post('http://localhost:5000/login/',{
        //     email: this.state.email,
        //     senha: this.state.senha})
        //     console.log(res.data)
 
    } 

    
    return(
        <div className="loginContainer">
            <h1>Login</h1>
        <div className="centralizar">
           <div className="row">
                <div className="input-field col s12">
                <input value={''} id="first_name2" type="text" className="validate" onChange={ (e) => {} }/>
                <label className="active" htmlFor="first_name2">Email</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12">
                <input value={''} id="first_name2" type="text" className="validate" onChange={ (e) => {} }/>
                <label className="active" htmlFor="first_name2">Senha</label>
                </div>
            </div>
            
            <a className="waves-effect waves-light btn-large btnAzulLogin" onClick={GetLogin}>Entrar</a>
            

        </div> 
        </div>

        
    )
}



export default Login