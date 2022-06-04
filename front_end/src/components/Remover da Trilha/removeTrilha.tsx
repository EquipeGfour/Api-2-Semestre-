import React, {useState} from "react";
import "./removeTrilha.css";
import {useCookies} from 'react-cookie';
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions";
import {Link,Navigate,useNavigate,useParams} from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize';

const RemoveTrilha:React.FC=(props)=>{

    const params = useParams()
    const [checked, setChecked] = React.useState(false)
    const [trilhas, setTrilhas] = React.useState([])
    const [colabs,setColabs] = React.useState([])

    const getColabByTrilha = () =>{
        axios.get(`/api/trilha/getColabByTrilhaId/${params.id}`, {headers: CriaHeader()}).then(res=>{
            console.log(res.data);            
            setColabs(res.data)
        }).catch(err=> {
            M.toast({html:`Falha ao Buscar Dados`, classes:"modalerro rounded"})
        })
    }
    
    const RemoveColabTrilha = (id) => {
        const obj ={
            trilha_id:params.id,
            colab_id:id
        }         
        axios.post(`/api/trilha/updateColab`, obj,  {headers: CriaHeader()}).then(res => {
            M.toast({html:res.data.message, classes:"modal1 rounded"})
            const newlistcolab = colabs.filter(c=>c.id !== id)
            setColabs(newlistcolab)           
        }).catch(err => {
            M.toast({html:`Falha`, classes:"modalerro rounded"})
        })
    }

    React.useEffect(()=>{    
        document.title='Remove-Trilha'  
        getColabByTrilha()       
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, Option); 
    },[])

    return(
        <div className="geralContainerRemoveTrilha">
            <span className="tituloRemoveTrilha">Colaboradores da Trilha</span>
            <ul className="collapsible expandable infodep1">
                <li className="blocos">
                    <div className="collapsible-header infodep" title=''><i className="material-icons">face</i>Colaboradores</div>
                    <div className="collapsible-body tabelaCargoRemoveTrilha">
                        <table className="highlight responsive-table centered tableRemoveTrilha">
                            <thead className="camposRemoveTrilha">
                                <tr>             
                                    <th>Nome do Funcionário</th>
                                    <th>Email</th>
                                    <th>Remover Trilha do Colaborador</th>  
                                </tr>
                            </thead>                                
                            <tbody>
                            {colabs.map((c,index)=>(                                
                                <tr key={c.id}>
                                    <td>{c.nome}</td>
                                    <td>{c.email}</td>
                                    <td><i className="Small material-icons lixeira pointer" title="Remover Trilha do Colab." onClick={()=>RemoveColabTrilha(c.id)}>delete_forever</i></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </li>                
            </ul>
        </div>            
    )
}
export default RemoveTrilha