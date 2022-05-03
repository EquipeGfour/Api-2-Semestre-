import React from "react"
import {Link,Navigate,useNavigate} from 'react-router-dom';
import "./style.css"
import axios from "axios"
import {useCookies} from 'react-cookie'
import M from 'materialize-css/dist/js/materialize'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import { CriaHeader } from "../../functions";


const PreRegistro1: React.FC=()=>{


    document.addEventListener('DOMContentLoaded', function() {
        var el = document.querySelectorAll('select');
        var instances = M.FormSelect.init(el, Option);
    });

    const navigate = useNavigate()
    const [cookie,setCookie] = useCookies(['ionic-user'])
    const [email,setEmail] = React.useState('')
    const [cpf,setCpf] = React.useState('')
    const [cnpj,setCnpj] = React.useState('')
    const [nome,setNome] = React.useState('')
    const [cargo,setCargo] = React.useState('')
    const [head,setHead] = React.useState('')
    const [id,setId] = React.useState('')

    const [cpfCnpj, setCpfCnpj] = React.useState("");
    const [mask, setMask] = React.useState("");

    const EnviaDados = () =>{
        let url='/api/preRegistro/cpf'         
        let obj = {
            email,
            cpf:cpfCnpj,
            nome,
            cnpj:null,
            cargo,
            head,
            id  
        }

        if(mask === "CNPJ"){
            url = '/api/preRegistro/cnpj'
            obj.cnpj=cpfCnpj
        }

        axios.post(url, obj,{headers:CriaHeader()}).then(res=>{

            M.toast({html:'Pré Registro realizado com sucesso!',classes:"modal1 rounded"})
            setEmail('')
            setCpfCnpj('')
            setNome('')
            setCargo('')
            setHead('')
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

    React.useEffect(()=>{
        document.title='Pré-Registro'
    },[])

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


            <div className="row">    
                <div className="input-field col s12 seletor ">
                    <select>
                        <option value="" disabled selected>Departamento</option>                        
                        <option value="1">Dep1</option>
                        <option value="2">Dep2</option>
                        <option value="3">Dep3</option>                          
                    </select>
                    <label>Departamento</label>
                </div>
            </div> 

            <div className="row">    
                <div className="input-field col s12 seletor ">
                    <select>
                        <option value="" disabled selected>Cargo</option>                          
                        <option value="1">Cargo1</option>
                        <option value="2">Cargo2</option>
                        <option value="3">Cargo3</option>                           
                    </select>
                    <label>Cargo</label>
                </div>
            </div>           


                <div className="row">
                    <div className="input-field col s12">
                        <input value={head} placeholder="Head do Departamento" id="first_name2" type="text" className="validate" onChange={ (e) => setHead(e.target.value)}/>
                        <label className="active" htmlFor="first_name2">Head do Departamento</label>
                    </div>
                </div>
            
            

        


            <a className="waves-effect waves-light btn-large btnAzul" onClick={RegistraDados}>Registrar</a>

        
        </div> 
    </div>
    )
        
    

}

export default PreRegistro1