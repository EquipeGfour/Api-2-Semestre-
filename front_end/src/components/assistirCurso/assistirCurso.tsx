import React, { useState } from "react"
import "./assistirCurso.css"
import { useCookies } from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import Colab from '../img/colabbranco.png'
import M from 'materialize-css/dist/js/materialize'
import { Link, useParams } from "react-router-dom"
import ReactTooltip from "react-tooltip";

const AssistirCurso: React.FC = (props) => {    
    const [videoaula,setVideoaula] = useState({url_arquivo:''})
    const {id} = useParams()

    const VideoAulas = (id:string) => {
        axios.get(`/api/upload/assistirAula/${id}`,{headers: CriaHeader()}).then(res=>{
            console.log(res.data)
            setVideoaula(res.data)
            console.log(videoaula);          
        }).catch(err=>{
            console.log(err)
        })
    }

    const RenderVideo = React.useMemo(()=>(
        <video id="videoBanner" className="videoBanner" controls src={videoaula.url_arquivo}></video>
    ),[videoaula])

    React.useEffect(() => {
        document.title = 'Assistir-Curso'
        VideoAulas(id)
    },[])

    return(
        <div className="containerAssistir">            
            <h3 className="titulo-assistir">Aula</h3>          
            {RenderVideo}            
            <div className="botaoFinal">
                <Link to={'/trilha'}>
                    <a className="waves-effect waves-light btn-large btnAzulFimCurso">Finalizado</a>
                </Link>                   
            </div>
        </div>
    )
}
export default AssistirCurso