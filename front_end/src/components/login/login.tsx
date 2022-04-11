import React, {Component} from 'react';
import {Link,Navigate,useNavigate} from 'react-router-dom';
import "./style10.css"
import axios from "axios"
import {useCookies} from 'react-cookie'


const Login : React.FC=(props)=> {
    const navigate=useNavigate()
    const [cookie,setCookie]=useCookies(['ionic-user'])
    const [email,setEmail] = React.useState('')
    const [senha,setSenha] = React.useState('')

    const GetLogin = async () =>{       
              
        axios.post('http://localhost:5000/login/',{
            email: email,
            senha: senha
        }).then(res=>{            
            setCookie('ionic-user',res.data.dados[0])
            const cargo=res.data.dados[0].cargo
            if (cargo === 'Administrador'|| cargo === 'Gestor'){
                navigate('home-admin')
            }else{
                navigate('dados-pessoais')
            }
        }).catch(erro=>{
             console.error('erro de login')
             console.log(erro.response)
        })

            
 
    } 

    
    return(
        <div className="loginContainer">
            <h1>Login</h1>
        <div className="centralizar">
           <div className="row">
                <div className="input-field col s12">
                <input value={email} id="first_name2" type="text" className="validate" onChange={ (e) => setEmail(e.target.value) }/>
                <label className="active" htmlFor="first_name2">Email</label>
                </div>
            </div>

            <div className="row senha">
                <div className="input-field col s12">
                <input value={senha} id="password" type="password" className="validate" onChange={ (e) => setSenha(e.target.value)}/>
                <label htmlFor="password">Senha</label>
                </div>
            </div>


            
            <a className="waves-effect waves-light btn-large btnAzulLogin" onClick={GetLogin}>Entrar</a>
            

        </div> 
        </div>

        
    )
}



export default Login