import React,{Component} from "react";
import {Link, Navigate, useNavigate} from 'react-router-dom';
import './trilha01.css';
import { CriaHeader } from "../../functions";
import axios from "../../functions/axios";


const Trilha:React.FC=()=>{


    React.useEffect(()=>{
        document.title = 'Trilha'
    })


    return(
        <div>

        </div>
    )

}
export default Trilha



