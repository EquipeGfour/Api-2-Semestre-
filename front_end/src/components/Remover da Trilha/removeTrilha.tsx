import React, {useState} from "react";
import "./removeTrilha.css";
import {useCookies} from 'react-cookie';
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions";
import {Link,Navigate,useNavigate,useParams} from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize';

const RemoveTrilha:React.FC=(props)=>{

    React.useEffect(()=>{    
        document.title='Remove-Trilha' 
        
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, Option); 
            
      },[])


      return(
        <div className="geralContainerRemoveTrilha">
            <span className="tituloRemoveTrilha">Remover da Trilha</span>

            <ul className="collapsible expandable infodep1">
                <li className="blocos">
                    <div className="collapsible-header infodep" title=''><i className="material-icons" >school</i>Nome Curso</div>
                        <div className="collapsible-body tabelaCargoRemoveTrilha">
                            <table className="highlight responsive-table tableRemoveTrilha">
                                <thead className="camposRemoveTrilha">
                                    <tr>             
                                        <th>Nome do Funcionário</th>
                                        <th></th>  
                                        <th></th>              
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Rafael</td>
                                        <i className="Small material-icons lixeira">delete_forever</i>
                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </li>
                
            </ul>
        </div>            
      )
}  


export default RemoveTrilha