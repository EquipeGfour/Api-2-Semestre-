import React, { useState } from "react"
import {Link,Navigate,useNavigate,useParams} from 'react-router-dom';
import "./style.css"
import axios from "../../functions/axios";
import {useCookies} from 'react-cookie'
import M from 'materialize-css/dist/js/materialize'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import { CriaHeader } from "../../functions";


const NovoCargo: React.FC=()=>{
    const navigate=useNavigate()
    const [cargo,setCargo]= useState('')


    const{id}=useParams()
    const EnviaDados = () =>{
        if(cargo === ""){
            M.toast({html:"Insira o nome do Cargo !", classes: "modalerro rounded"})
            return
        }
        
        
        axios.post(`/api/cargo/insertCargo/${id}`,{cargo}, {headers:CriaHeader()}).then(res=>{
            M.toast({html:'Departamento criado com sucesso!', classes:"modal1 rounded"})
            navigate(`/detalhe-departamento/${id}`)
        }).catch(erro=>{
            M.toast({html:"Insira o nome do Cargo !", classes: "modalerro rounded"})
            console.error('Erro', erro.response)
        })      
    }


    React.useEffect(()=>{
        document.title='Novo-Cargo'
    },[])

    return(

    <div className="acessoContainer">
            <h1>Novo Cargo</h1>
            <div className="centralizar">
            <div className="row">
                <div className="input-field col s12">
                <input value={cargo} placeholder="Nome" id="first_name2" type="text" className="validate" onChange={e=>setCargo(e.target.value)} />
                <label className="active" htmlFor="first_name2">Cargo</label>
                </div>
            </div>    
            <a className="waves-effect waves-light btn-large btnAzul" onClick={EnviaDados}>Salvar</a>        
        </div> 
    </div>
    )
        
    

}

export default NovoCargo