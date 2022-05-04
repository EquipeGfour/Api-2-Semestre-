import React, { useState } from "react"
import {Link,Navigate,useNavigate} from 'react-router-dom';
import "./style.css"
import axios from "axios"
import {useCookies} from 'react-cookie'
import M from 'materialize-css/dist/js/materialize'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import { CriaHeader } from "../../functions";


const NovoDepartamento: React.FC=()=>{
    const navigate=useNavigate()
    const [departamento,setDepartamento] = useState('')
    
    const sendData=()=>{
        if(departamento === ""){
            M.toast({html:'Preencha o nome do Departamento!', classes:"modalerro rounded"})
            return
        }


        axios.post('/api/departamento/inserirDepart', {area:departamento}, {headers:CriaHeader()}).then(res=>{
            M.toast({html:'Departamento criado com sucesso!', classes:"modal1 rounded"})
            navigate('/geral-departamentos')  
        }).catch(erro=>{
            M.toast({html:'Preencha o nome do Departamento!', classes:"modalerro rounded"})
            console.error('Erro', erro.response)
        })


    }

    React.useEffect(()=>{
        document.title='Novo-Departamento'
    },[])

    return(

    <div className="acessoContainer">
            <h1>Novo Departamento</h1>
            <div className="centralizar">
            <div className="row">
                <div className="input-field col s12">
                <input value={departamento} placeholder="Nome" id="first_name2" type="text" className="validate" onChange={e=>setDepartamento(e.target.value)} />
                <label className="active" htmlFor="first_name2">Departamento</label>
                </div>
            </div> 

            <div className="row">
                <div className="input-field col s12">
                    <input  placeholder="Head do Departamento" id="first_name2" type="text" className="validate"/>
                    <label className="active" htmlFor="first_name2">Head do Departamento</label>
                </div>
            </div>      
            


        <a className="waves-effect waves-light btn-large btnAzul" onClick={sendData}>Salvar</a>

        
        </div> 
    </div>
    )
        
    

}

export default NovoDepartamento