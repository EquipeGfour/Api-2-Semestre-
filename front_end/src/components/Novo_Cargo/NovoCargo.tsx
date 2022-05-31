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
    const [nivel,setNivel]= useState('')
    const{id}=useParams()

    const EnviaDados = () =>{
        if(cargo === ""){
            M.toast({html:"Insira o nome do Cargo !", classes: "modalerro rounded"})
            return
        }     
        axios.post(`/api/cargo/insertCargo/${id}`,{cargo,nivel}, {headers:CriaHeader()}).then(res=>{
            M.toast({html:'Departamento criado com sucesso!', classes:"modal1 rounded"})
            navigate(`/detalhe-departamento/${id}`)
        }).catch(erro=>{
            M.toast({html:"Insira o nome do Cargo !", classes: "modalerro rounded"})
            console.error('Erro', erro.response)
        })      
    }

    const FiltraNivel = (id)=>{
        console.log(id);
        if(id === '1'){
            console.log('Ta selecionando diretoria', id)
            setNivel('diretoria');
        }if(id === '2'){
            console.log('Ta selecionando g', id)
            setNivel('gerencia');

        }if(id === '3'){
            console.log('Ta selecionando l', id)
            setNivel('lideranca');

        }if(id === '4'){
            console.log('Ta selecionando c', id)
            setNivel('colaboradores'); 
        } 
    }

    React.useEffect(()=>{
        document.title='Novo-Cargo'
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, Option);
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

                <div className="row">
                    <div className="input-field col s12 seletor ">
                        <select onChange={e=>FiltraNivel(e.target.value)}>
                            <option value="0" disabled selected>Nível do Cargo</option>
                            <option value="1">Diretoria</option>
                            <option value="2">Gerencia</option>
                            <option value="3">Liderança</option>
                            <option value="4">Colaboradores</option>
                        </select>
                        <label>Nível</label>
                    </div> 
                </div>  
                <a className="waves-effect waves-light btn-large btnAzulnovocargo" onClick={EnviaDados}>Salvar</a>        
            </div> 
        </div>
    )
}
export default NovoCargo