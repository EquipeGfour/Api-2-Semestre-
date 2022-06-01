import React, { Component, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import './geralCursos.css';
import colabbranco from "../img/colabbranco.png";
import trilhabranco from "../img/trilhabranco.png";
import { CriaHeader } from "../../functions";
import axios from "../../functions/axios";

// interface iCursos{
//     nome_curso: string
//     descricao: string
//     nivel_curso: string
//     carga_horaria_curso: string
// }

const GeralCursos: React.FC = (props) => {
    const[curso,setCurso] = useState([])
    const {id} = useParams()
    const buscaCursos = () =>{
        axios.get(`/api/curso/listarCursos/${id}`,{headers:CriaHeader()}).then((res)=>{      
            setCurso(res.data)
          }).catch(erro=>{
            console.error(erro)
          })
        }
    

    React.useEffect(() => {
        document.title = 'Geral-Cursos'
        buscaCursos()
    },[])

    return (
            <div className="tela-trilha">
                <h3 className="titulo-trilha">Cursos</h3>
                <div className="row">
                    <div className="botaoVoador">                
                    </div>              
                    <div className="col s12 conteiner-cinza3">
                    {curso.map((curso,index)=>(                         
                        <div className="bg-cinza highlight div-cursos">
                            <Link to={`/menu-curso/${curso.id}`}>
                                <div className="card-cinza" title="Visualizar Aulas">
                                        <div key={curso.id}>                                                     
                                            <h5 className="curso1">{curso.nome_curso}</h5>
                                            <br></br>
                                            <p><b>Descrição do Curso: </b>{curso.descricao}</p>
                                            <br></br>
                                            <p><b>Nivel: </b>{curso.nivel_curso}</p>
                                            <br></br>
                                            <p><b>Carga Horária: </b>{curso.carga_horaria_curso}</p>                                         
                                            <div className="addcurso">
                                            <Link to={`/criar-aula/${curso.id}`}> 
                                                <a className="waves-effect waves-light btn-small " title="Adicionar Curso à Trilha">Adicionar Aula</a></Link>                        
                          
                                            </div>  
                                        </div>
                                </div>
                            </Link> 
                        </div>
                    ))}                
                    </div>
                </div>
            </div>
    )
}
export default GeralCursos