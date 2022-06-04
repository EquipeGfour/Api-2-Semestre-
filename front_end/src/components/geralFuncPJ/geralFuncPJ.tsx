import React, { useState } from "react"
import "./geralFuncPJ.css"
import {useCookies} from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import ReactTooltip from 'react-tooltip';
import {Link,Navigate,useNavigate} from 'react-router-dom';
import { MdSettingsBackupRestore } from "react-icons/md";

const GeralFuncPJ:React.FC=(props)=>{


    React.useEffect(()=>{
        document.title='Geral-FuncionariosPJ'
          
      },[])

      return(
        <div className="geralContainerColabPJ">
            <span className="tituloColabPJ">Colaboradores da Empresa</span>
            <table className="highlight responsive-table tablefunc centered">
                <thead className="campos">
                    <tr>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Área</th>
                        <th>Email</th>
                        <th>Telefone</th>  
                        <th>Empresa</th>            
                    </tr>
                </thead>

                <tbody>
                    <tr></tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tbody>
            
                    </table>

        </div>
      )


}
export default GeralFuncPJ