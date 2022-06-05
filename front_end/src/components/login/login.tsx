import React, {Component} from 'react';
import {Link,Navigate,useNavigate} from 'react-router-dom';
import "./style10.css"
import axios from "../../functions/axios";
import {useCookies} from 'react-cookie'
import M from 'materialize-css/dist/js/materialize'
import { log } from 'console';

const Login : React.FC=(props)=> {
    const navigate = useNavigate()
    const [cookie,setCookie] = useCookies(['ionic-user', 'ionic-JWT'])
    const [email,setEmail] = React.useState('')
    const [senha,setSenha] = React.useState('')
    const [nivel,setNivel] = React.useState('')

    const teclaEnter = (event)=>{
        if(event.key==='Enter') GetLogin()
    }

    const GetLogin = async () =>{    
        axios.post('/api/login/',{
            email: email,
            senha: senha,
            nivel: nivel
        }).then(res=>{          
            const cargo=res.data.dados[0].cargo
            const cpf=res.data.dados[0].cpf
            const cnpj=res.data.dados[0].cnpj
            const status=res.data.dados[0].status
            const nivel = res.data.dados[0].nivel

            if (status !== 'Desligado'){                
                setCookie('ionic-user',res.data.dados[0])
                setCookie('ionic-JWT', res.data.token)
            }
            if (nivel === 'diretoria' && status === 'Ativo' || cargo === 'gerencia' && status === "Ativo" || cargo === 'Administrador'){
                navigate('home-admin')
            }else if(cpf && !status){
                navigate('dados-pessoais')
            }else if(cnpj && !status){
                navigate('dados-empresa')
            }else if (status === "Ativo" && nivel === 'lideranca' || status === "Ativo" && nivel === 'colaboradores'){
                navigate('home-colaborador')
            }
            else{
                M.toast({html:'Nenhum CPF/CNPJ está cadastrado ou usuário está desligado, Entre em contato com o Administrador',classes:"modalerro rounded"})
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
                <span className="esqueceu">Esqueceu sua Senha? Clique <a href="/esqueceu" target="_blank" className="checkboxTermos">AQUI</a></span>
            </div>         
            <a className="waves-effect waves-light btn-large btnAzulLogin1" onClick={GetLogin}>Entrar</a>
        </div> 
    </div>        
    )
}
export default Login