import React from "react";
import axios from "../../functions/axios";
import "./desligados.css";
import { CriaHeader } from "../../functions";
import ReactTooltip from 'react-tooltip';
import {Link,Navigate,useNavigate} from 'react-router-dom';

const Desligados:React.FC=()=>{
    


    React.useEffect(()=>{
        document.title='Desligados'
        
      },[])


    return(
    <div className="geralContainerdes">
        <span className="titulodes">Desligados</span>
    <div className="Pesquisa">
        <div className="nav-wrapper barPesquisa">
            <form>
                <div className="input-field">
                    <input id="search" type="search" placeholder="Pesquisar por (Nome,Cargo,Área)" required/>
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                </div>
            </form>
        </div>
    </div>
   

        <table className="highlight responsive-table tablefuncdes centered">
        <thead className="camposdes">
          <tr className="linhaTab">
            <th>Nome</th>
            <th>Ex-Cargo</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Data Admissão</th>
            <th>Data Demissão</th>               
          </tr>
        </thead>

        <tbody>
            <tr className="linhaTab">
                <td>Carlos</td>
                <td>Técnico de Segurança</td>
                <td>carlosbotafogo@fatec.com</td>
                <td>(012)9 9191-7898</td>
                <td>21/07/2021</td>
                <td>22/07/2021</td>
            </tr>

        </tbody>
            
        </table>

 </div>
    )
}

export default Desligados