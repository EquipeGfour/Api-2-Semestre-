import React, { useState } from "react"
import "./empresa.css"
import {useCookies} from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import {Link,Navigate,useNavigate} from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize'
import ReactTooltip from 'react-tooltip';


const Empresa:React.FC=(props)=>{
    const [empresa,setEmpresa] = useState([])

    const buscaEmpresa = () =>{
        axios.get('/api/pj/trazerEmpresas',{headers:CriaHeader()}).then(res => {
            setEmpresa(res.data)
        }).catch(erro=>{
            console.error(erro)
          })
    }

    React.useEffect(()=>{    
        document.title='Empresa'
        buscaEmpresa()
    },[])
    
    
    return(
        <div className="geralContainerEmpresa">
            <span className="tituloEmpresa">Empresas</span>
                <table className="highlight responsive-table tablegeral centered">
                    <thead className="campos">
                        <tr>
                            <th>Nome Empresa</th>
                            <th>CNPJ</th>
                            
                            <th>Tempo de Formalização</th>             
                        </tr>
                    </thead>
                    <tbody>
                    {empresa.map((emp,index)=>(
                        <tr key={index}>
                        <td className="text-white">{emp.empresa_contratada}</td>
                        <td className="text-white">{emp.cnpj}</td>
                        
                        <td className="text-white">{emp.tempo_formalizacao}</td>
                        <td>               
                        <ReactTooltip />                
                        <i className="material-icons pointer" data-tip='Ver Colaboradores'>search</i>
                        </td>   
                        <td><i className="material-icons delete pointer" data-tip='Deletar Departamento'>delete_forever</i></td>             
                    </tr>
                    ))}
                    </tbody>
                </table>
               
        </div>
    )
}

export default Empresa