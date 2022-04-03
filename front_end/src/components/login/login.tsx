import React, { Component} from 'react';

import "./style.css"
import axios from "axios"

type state = {
    tela: string,
    email: string,
    senha: string
  }

class Login extends Component<{funcao:(a:any,b?:any)=>void},state> {
    constructor(props){
        super(props)
        this.setState({
            email:'',
            senha:''
        })
    }





render(){

    const getLogin = async () =>{
        
        const res = await axios.post('http://localhost:5000/login/',{
            email: this.state.email,
            senha: this.state.senha})
            console.log(res.data)
            this.props.funcao("dadosPessoais")
    } 

    
    return(
        <div className="loginContainer">
            <h1>Login</h1>
        <div className="centralizar">
           <div className="row">
                <div className="input-field col s12">
                <input value={this.state?.email ||''} id="first_name2" type="text" className="validate" onChange={ (e) => this.setState({email:e.target.value}) }/>
                <label className="active" htmlFor="first_name2">Email</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12">
                <input value={this.state?.senha ||''} id="first_name2" type="text" className="validate" onChange={ (e) => this.setState({senha:e.target.value}) }/>
                <label className="active" htmlFor="first_name2">Senha</label>
                </div>
            </div>
            <a className="waves-effect waves-light btn-large btnAzul" onClick={(e) => this.props.funcao('dadosPessoais',e)}>Entrar</a>
            

        </div> 
        </div>

        
    )
}
}


export default Login