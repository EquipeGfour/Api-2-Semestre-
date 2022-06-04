import React, { useState } from "react";
import axios from "../../functions/axios";
import "./desligados.css";
import { CriaHeader } from "../../functions";
import ReactTooltip from 'react-tooltip';
import {Link,Navigate,useNavigate} from 'react-router-dom';
import { useCookies } from "react-cookie";

const Desligados:React.FC=(props)=>{    
    const [colaboradores,setColaboradores] = React.useState([])
    const [searchDesligado,setSearchDesligado] = useState('');

    const TrazerDesligados = () =>{
        axios.get(`/api/colab/desligados`,{headers:CriaHeader()}).then(res=>{
            setColaboradores(res.data)
            
        }).catch(erro=>{
            console.error(erro)
        })
    }

    const searchColabDesligado = (searchDesligado) => {
        axios.get(`/api/colab/searchDesligados?nome=${searchDesligado}`, {headers:CriaHeader()}).then( res => {
            setColaboradores(res.data)
            
        }).catch(erro=>{
            console.error(erro)
        })
    }

React.useEffect(()=>{
    document.title='Desligados'
    TrazerDesligados()  
    if(searchDesligado !== '')searchColabDesligado(searchDesligado)     
},[searchDesligado])

return(
    <div className="geralContainerdes">
            <span className="titulodes">Desligados</span>
        <div className="Pesquisa">
            <div className="nav-wrapper barPesquisa">
                <form>
                    <div className="input-field">
                        <input value={searchDesligado} id="search" type="search" placeholder="Pesquisar por (Nome,Cargo,Área)" required onChange={ (e) => setSearchDesligado( e.target.value )}/>
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
                    <th>Data Admissão</th>
                    <th>Data Demissão</th>               
                </tr>
            </thead>
            <tbody>
                {colaboradores.map((colab, index)=>(    
                    <tr className="linhaTab" key={index}>
                        <td>{colab.nome}</td>
                        <td>{colab.cargo?.cargo}</td>
                        <td>{colab.email}</td>
                        <td>{colab.contratos?.[0]?.data_Admissao}</td>
                        <td>{colab.data_desligamento}</td>                
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)
}
export default Desligados