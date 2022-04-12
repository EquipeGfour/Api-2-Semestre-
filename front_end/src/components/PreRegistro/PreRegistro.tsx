import React from "react"
import {Link,Navigate,useNavigate} from 'react-router-dom';
import "./style.css"
import axios from "axios"
import {useCookies} from 'react-cookie'
import M from 'materialize-css/dist/js/materialize'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import { CriaHeader } from "../../functions";


const PreRegistro1: React.FC=()=>{

    const navigate = useNavigate()
    const [cookie,setCookie] = useCookies(['ionic-user'])
    const [email,setEmail] = React.useState('')
    const [cpf,setCpf] = React.useState('')
    const [cnpj,setCnpj] = React.useState('')
    const [nome,setNome] = React.useState('')

    const [cpfCnpj, setCpfCnpj] = React.useState("");
    const [mask, setMask] = React.useState("");

    const EnviaDados = () =>{
        let url='http://localhost:5000/preRegistro/cpf'
        let obj = {
            email,
            cpf:cpfCnpj,
            nome,
            cnpj:null  
        }

        if(mask === "CNPJ"){
            url = 'http://localhost:5000/preRegistro/cnpj'
            obj.cnpj=cpfCnpj
        }

        axios.post(url, obj,{headers:CriaHeader()}).then(res=>{


            M.toast({html:'Pré Registro realizado com sucesso!',classes:"modal1 rounded"})
            setEmail('')
            setCpfCnpj('')
            setNome('')
            console.log(res)

        }).catch(erro=>{
            M.toast({html:'Não tem ERRO (lascou tudo)!',classes:"modalerro rounded"})
        });
    }


    const RegistraDados = () =>{
        if(email === '' && cpf === '' && nome === ''){
            M.toast({html:'Preencha TODOS os campos !',classes:"modalerro rounded"})
        }else{
            EnviaDados()
        }    
    }

    return(

    <div className="acessoContainer">
            <h1>Pré-Registro</h1>
            <div className="centralizar">
            <div className="row">
                <div className="input-field col s12">
                <input value={nome} placeholder="Nome Completo" id="first_name2" type="text" className="validate" onChange={ (e) => setNome(e.target.value) }/>
                <label className="active" htmlFor="first_name2">Nome</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12">
                <input value={email} placeholder="Email" id="first_name2" type="text" className="validate" onChange={ (e) => setEmail(e.target.value) }/>
                <label className="active" htmlFor="first_name2">Email</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12">
                <CpfCnpj
                    value={cpfCnpj}
                    placeholder="CPF ou CNPJ"
                    className="validate"
                    id="first_name2"
                    type="text"
                    onChange={(event, type) => {
                    setCpfCnpj(event.target.value);
                    setMask(type)
                    
                    }}/>               
                <label className="active" htmlFor="first_name2">CPF ou CNPJ</label>                         
                </div>
            </div>


            <a className="waves-effect waves-light btn-large btnAzul" onClick={RegistraDados}>Registrar</a>

        
        </div> 
    </div>
    )
        
    

}

export default PreRegistro1