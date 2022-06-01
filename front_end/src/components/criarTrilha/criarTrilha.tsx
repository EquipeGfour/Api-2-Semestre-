import React, { useState } from "react"
import "./criarTrilha.css"
import {useCookies} from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import {Link,Navigate,useNavigate} from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize'
import ReactTooltip from 'react-tooltip';
import { navigate } from "../../functions/navigation";

const CriarCurso: React.FC = (props)=>{
const navigate=useNavigate()
const[nometrilha,setTrilha] = useState('')
const [descricaotrilha,setDescricaoTrilha] = React.useState('')

const criarTrilha = () =>{
    if(nometrilha === ""){
        M.toast({html:'Preencha o nome da Trilha!', classes:"modalerro rounded"})        
        return
    }
    axios.post(`/api/trilha/criarTrilha`,{nome_trilha: nometrilha, descricao_trilha:descricaotrilha},{headers: CriaHeader()}).then(res=>{
        M.toast({html:'Trilha criada com sucesso!', classes:"modal1 rounded"})
        navigate('/trilha')

    }).catch(err=>{
    console.log(err)
    })      
}


React.useEffect(()=>{    
    document.title='Criar Curso'   
  },[])

  return(
    <div className="acessoContainertrilha">
            <h1>Nova Trilha</h1>
            <div className="centralizar">
                <div className="row">
                    <div className="input-field col s12">
                        <input value={nometrilha} placeholder="Nome Trilha" id="first_name2" type="text" className="validate" onChange={e=>setTrilha(e.target.value)}/>
                        <label className="active" htmlFor="first_name2">Nome Trilha</label>
                    </div>
                </div>

                <div className="row">
                        <div className="input-field col s12 texto">
                            <textarea  value={descricaotrilha} id="textarea1" placeholder="Descrição Curso" className="materialize-textarea text-white" onChange={(e) => setDescricaoTrilha(e.target.value)}></textarea>
                            <label className="labelstatus1" htmlFor="textarea1">Descrição do Curso</label>
                        </div>
                    </div>

                <a className="waves-effect waves-light btn-large btnAzulnovo" onClick={criarTrilha}>Salvar</a>        
            </div> 
    </div>
    )
}
export default CriarCurso


