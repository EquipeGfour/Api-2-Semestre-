import React, { useState } from "react"
import "./menuCursoColab.css"
import { useCookies } from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import Colab from '../img/colabbranco.png'
import M from 'materialize-css/dist/js/materialize'
import { Link, useParams } from "react-router-dom"
import ReactTooltip from "react-tooltip";
import fileDownload from "js-file-download";


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

    const downloadFile = (id,nome_arquivos,extensao) =>{
        axios.get(`/api/upload/download/${id}`, {headers: CriaHeader(), responseType: 'blob'}).then(res=>{      

          const unirarquivo =  nome_arquivos + extensao
          fileDownload(res.data, unirarquivo)

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

            <ul className="collapsible expandable headerCurso">
                {arquivosaula.map((t:Aula)=>(                     
                <li className="blocos">
                    <div className="collapsible-header bodyCurso" title=''>
                        <i className="material-icons">computer</i>{t.titulo_aula}
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
                                <tr key={index}>
                                    <td>{a.nome_arquivos}</td>
                                    <td>{a.tipo}</td>                                 
                                    <td>
                                        {a.tipo === 'video'?
                                        <Link to={''}>
                                        <i className="material-icons pointer" title="Assistir">play_arrow</i>
                                        </Link>:
                                        <i className="material-icons pointer" title="Baixar" data-tip='Baixar' onClick={()=>downloadFile(a.id,a.nome_arquivos,a.extensao)}>file_download</i>}
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