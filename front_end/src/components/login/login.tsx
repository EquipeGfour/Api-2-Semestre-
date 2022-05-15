import React, {Component} from 'react';
import {Link,Navigate,useNavigate} from 'react-router-dom';
import "./style10.css"
import axios from "../../functions/axios";
import {useCookies} from 'react-cookie'
import M from 'materialize-css/dist/js/materialize'


const Login : React.FC=(props)=> {
    const navigate = useNavigate()
    const [cookie,setCookie] = useCookies(['ionic-user', 'ionic-JWT'])
    const [email,setEmail] = React.useState('')
    const [senha,setSenha] = React.useState('')

    const teclaEnter = (event)=>{
        if(event.key==='Enter') GetLogin()
    }
    const GetLogin = async () =>{       
              
        axios.post('/api/login/',{
            email: email,
            senha: senha
        }).then(res=>{            
            setCookie('ionic-user',res.data.dados[0])
            setCookie('ionic-JWT', res.data.token)

            const cargo=res.data.dados[0].cargo
            const cpf=res.data.dados[0].cpf
            const cnpj=res.data.dados[0].cnpj

            if (cargo === 'Administrador'|| cargo === 'Gestor'){
                navigate('home-admin')
            }else if(cpf){
                console.log(res.data.dados[0])
                navigate('dados-pessoais')
            }else if(cnpj){
                navigate('dados-empresa')
            }else{
                M.toast({html:'Nenhum CPF/CNPJ está cadasrado, Entre em contato com o Administrador',classes:"modalerro rounded"})
            }
        }).catch(erro=>{
            
            console.log(erro.response)
        })          
    } 
    
    React.useEffect(()=>{
        document.title='Login'
        
    },[])

    return(
        
        <div className="loginContainer">
            <h1>Login</h1>
        <div className="centralizar">
           <div className="row">
                <div className="input-field col s12">
                <input value={email} id="email" type="text" className="validate" onChange={ (e) => setEmail(e.target.value) }/>
                <label className="active" htmlFor="first_name2">Email</label>
                
                
                </div>
            </div>

            <div className="row senha">
                <div className="input-field col s12">
                <input value={senha} id="password" type="password" className="validate" onChange={ (e) => setSenha(e.target.value)} onKeyDown={teclaEnter}/>
                <label htmlFor="password">Senha</label>
                </div>
            </div>


            
            <a className="waves-effect waves-light btn-large btnAzulLogin" onClick={GetLogin}>Entrar</a>
            

        </div> 
        </div>

        
    )
}



export default Login