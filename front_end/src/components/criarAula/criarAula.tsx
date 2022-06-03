import React, { useState } from "react"
import "./criarAula.css"
import { useCookies } from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize'
import { navigate } from "../../functions/navigation";

const CriarAula: React.FC = (props) => {
    const [tituloaula,setTituloAula] = useState('')
    const [descricaoaula,setDescricaoAula] = useState('')
    const {id} = useParams()
    const navigate = useNavigate();

    const criaAula = () =>{
        let url = `/api/aula/criarAula/${id}`
        let obj ={
            titulo_aula:tituloaula,
            descricao_aula:descricaoaula,
            curso_id:id
        }
        if(tituloaula === "" || descricaoaula === ""){
            M.toast({html:'Preencha TODOS os campos!', classes:"modalerro rounded"})
            return
        }
        axios.post(url,obj ,{ headers: CriaHeader() }).then((res) => {
            M.toast({html: "Aula adicionada com sucesso!",classes: "modal1 rounded",});
            setTituloAula('');
            setDescricaoAula('');
        })
        .catch((erro) => {        
           
        });
    };
    


    React.useEffect(() => {
        document.title = 'Cria-Aula'
        var elems1 = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems1, Option);
    }, [])

    return (
        <div className="containerCriaAula">
            <div className="dadosContainer cursos">
                <span>Criar Aulas</span>
            </div>

            <div className="row camposaula">
                    <div className="input-field col s12">
                        <input value={tituloaula} placeholder="Nome da Aula" id="first_name2" type="text" className="validate" onChange={e=>setTituloAula(e.target.value)}/>
                        <label className="active" htmlFor="last_name">Nome da Aula</label>
                    </div>
            </div>

            <div className="row camposaula">
                <div className="input-field col s12 ">
                <textarea value={descricaoaula} id="textarea1" placeholder="Descrição Aula" className="materialize-textarea text-white textodesc" onChange={e=>setDescricaoAula(e.target.value)}></textarea>
                    <label className="active labelaula" htmlFor="last_name">Descrição Aula</label>
                </div>
            </div>
            <Link to={`/trilha`}>
            <div className="aulabtn">
                <a className="waves-effect waves-light btn-large btnAzulCriaraula" onClick={criaAula}>Criar Aula</a>
            </div>
            </Link>
        </div>
    )   
}
export default CriarAula