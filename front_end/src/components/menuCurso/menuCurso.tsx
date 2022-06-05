import React, { useState } from "react"
import "./menuCurso.css"
import { useCookies } from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import Colab from '../img/colabbranco.png'
import M from 'materialize-css/dist/js/materialize'
import { Link, useParams } from "react-router-dom"
import ReactTooltip from "react-tooltip";


interface Aula{
    arquivos: any;
    id: number
    titulo_aula:string
}

const MenuCurso: React.FC = (props) => {
    const[tituloaula,setTituloAula] = useState<Aula[]>([])
    const [arquivosaula,setArquivosAula] = useState([])
    const [videosaula,setVideosAula] = useState()
    const {id} = useParams()

    const ListAulas = (id:string) => {
        axios.get(`/api/upload/listarAulasCursos/${id}`,{headers: CriaHeader()}).then(res=>{
          setArquivosAula(res.data)
        }).catch(err=>{
          console.log(err)
        })
    }

    React.useEffect(() => {            
        document.title = 'Menu-Curso'
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, Option);
        var elems1 = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems1, Option);
        
        ListAulas(id)
    }, [])

    return(
        <div>
            <div className="geralContainer2 ">
                <span className="titulo">Aulas</span>
            </div>        

            <ul className="collapsible expandable headerCurso ">
                {arquivosaula.map((t:Aula)=>(                     
                <li className="blocos">
                    <div className="collapsible-header bodyCurso" title=''>                                        
                        <i className="material-icons">computer</i>{t.titulo_aula}
                            <Link to={`/criar-curso/${t.id}`}>
                                <i className="material-icons" title="Add Arquivos">add</i>
                            </Link>                          
                    </div>
                    <div className="collapsible-body tabelaCargo">
                        <table className="highlight responsive-table centered">
                            <thead className="campos">
                                <tr>             
                                    <th className="espacamento">Arquivos</th>
                                    <th className="espacamento">Tipo</th>  
                                    <th className="espacamento">Assistir</th>              
                                </tr>
                            </thead>
                            <tbody>
                                {t.arquivos.map((a,index)=>(                    
                                <tr key={a.id}>
                                    <td>{a.nome_arquivos}</td>
                                    <td>{a.tipo}</td>                               
                                    <td>
                                        {a.tipo === 'video'?
                                        <Link to={`/assistir-curso/${a.id}`}>
                                        <i className="material-icons pointer" title="Assistir">play_arrow</i>
                                        </Link>:
                                        <a href={a.url_arquivo} target="_blank"><i className="material-icons pointer" title="Baixar">download</i></a>}
                                    </td>                                                           
                                </tr>
                                ))}                                                    
                            </tbody>
                        </table>
                    </div>
                </li>
            ))}   
            </ul>
        </div>
    )
}
export default MenuCurso