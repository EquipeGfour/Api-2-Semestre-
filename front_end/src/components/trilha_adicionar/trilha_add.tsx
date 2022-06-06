import React, { useState } from "react"
import "./style.css"
import { useCookies } from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize'


const TrilhaAdd: React.FC = (props) => {
const {id} = useParams()   
const navigate = useNavigate();
const [nomecurso,setNomecurso] = useState('')
const [descricao,setDescricao] = useState('')
const [nivel,setNivel] = useState('')
const [cargahoraria,setCargahoraria] = useState('')
const [descricaotrilha,setDescricaoTrilha] = React.useState('')
const ExeMaterializeSelect = () => {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, Option);
  };

const criaCurso = () =>{
    let url = `/api/curso/criarCurso/${id}`
    let obj ={
        nome_curso:nomecurso,
        descricao,
        nivel_curso:nivel,
        carga_horaria_curso:cargahoraria,
        trilha_id:id
    }
    if(nomecurso === "" || descricao === "" || nivel === "" || cargahoraria === ""){
        M.toast({html:'Preencha TODOS os campos!', classes:"modalerro rounded"})
        return
    }
    axios.post(url,obj ,{ headers: CriaHeader() }).then((res) => {
        M.toast({html: "Curso adicionado com sucesso!",classes: "modal1 rounded",});
        setNomecurso('');
        setDescricao('');
        setNivel('');
        setCargahoraria('')
        navigate(`/trilha`)
    })
    .catch((erro) => {        
       
    });
};

const FiltraNivel = (id)=>{
    if(id === '1'){        
        setNivel('Basico');
    }if(id === '2'){
        setNivel('Intermediario');
    }if(id === '3'){
        setNivel('Avancado');
    } 
}

    React.useEffect(() => {
        document.title = 'Trilha-adicionar'
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, Option);
        ExeMaterializeSelect()

    }, [])

    return (
        <div className="containerPrincipal">

            <div className="dadosContainer titulo">
                <span>Criar Curso</span>
            </div>

            <div className="row">
                <div className="input-field col s12">
                    <input value={nomecurso} placeholder="Nome do Curso" id="first_name2" type="text" className="validate" onChange={(e) => setNomecurso(e.target.value)}/>
                    <label className="active" htmlFor="last_name">Nome do Curso</label>
                </div>
                <form>
                    <div className="row">
                        <div className="input-field col s12 texto">
                            <textarea  value={descricao} id="textarea1" placeholder="Descrição Curso" className="materialize-textarea text-white" onChange={(e) => setDescricao(e.target.value)}></textarea>
                            <label className="labelstatus1" htmlFor="textarea1">Descrição do Curso</label>
                        </div>
                    </div>
                </form>
                <div className="col s12">
                    <div className="input-field col s12 input-select seletorstatus">
                        <select className='select' onChange={(e) => FiltraNivel(e.target.value)}>
                            <option value="0">Nivel</option>
                            <option value="1">Basico</option>
                            <option value="2">Intermediário</option>
                            <option value="3">Avançado</option>
                        </select>
                        <label className="labelstatus">Nível do Curso</label>
                    </div>
                </div>
                <div className="input-field col s12">
                    <input value={cargahoraria} placeholder="Carga Horária do Curso" id="first_name2" type="text" className="validate" onChange={(e) => setCargahoraria(e.target.value)}/>
                    <label className="active" htmlFor="last_name">Carga Horária do Curso</label>
                </div>
            </div>

            <div className="centerbtn">
                <a className="waves-effect waves-light  btn-large botaocriarcurso" onClick={criaCurso}>Criar</a>
            </div>
        </div>
    )
}

export default TrilhaAdd