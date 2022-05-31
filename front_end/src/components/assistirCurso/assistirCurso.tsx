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


    

    React.useEffect(() => {            
        document.title = 'Assitir-Curso'
    }, [])

    return(
        <div>
        <video id="videoBanner" className="videoBanner" loop autoPlay muted controls  >
            <source src='http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4' type='video/mp4'></source>            
        </video>


    

        </div>
    )
}
export default AssistirCurso