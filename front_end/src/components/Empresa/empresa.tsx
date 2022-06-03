import React, { useState } from "react"
import "./empresa.css"
import {useCookies} from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import {Link,Navigate,useNavigate} from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize'
import ReactTooltip from 'react-tooltip';


const Empresa:React.FC=(props)=>{

    React.useEffect(()=>{    
        document.title='Empresa'
        
      },[])
    
    
      return(
        <div className="geralContainerEmpresa">
            <span className="tituloEmpresa">Empresas</span>
                <table className="highlight responsive-table tablegeral centered">
                    <thead className="campos">
                        <tr>
                            <th>Nome Empresa</th>
                            <th>CNPJ</th>
                            <th>Responsável</th>
                            <th>Tempo de Formalização</th>             
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>                               
                            <i className="material-icons" data-tip='Ver Cargos'>search</i>
                            </td>   
                            <td><i className="material-icons delete" data-tip='Deletar Departamento'>delete_forever</i></td>             
                        </tr>
                    </tbody>
                </table>
                {/*<Link to={"/novo-departamento"} className="waves-effect waves-light btn-large btnAzulLogin">Nova Empresa</Link>*/}
        </div>
      )
}

export default Empresa