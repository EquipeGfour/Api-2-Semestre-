import React, { useState } from "react"
import "./vincularCurso.css";
import { useCookies } from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize'


const VincularCurso: React.FC = (props) => {
    const params = useParams()
    const navigate = useNavigate()
    const [colaboradores,setColaboradores] = React.useState([])
    const [colabSelecionados, setColabSelecionados] = React.useState([])

    const BuscaColab = () =>{
        axios.get('/api/colab/geral',{headers:CriaHeader()}).then(res=>{
            setColaboradores(res.data.dados)
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, Option);
        }).catch(erro=>{
            console.error(erro)
        })
    }

    const SetColabTrilha = () =>{
        const obj = {
            ids: colabSelecionados,
            trilha_id: params.id
        }
        axios.put('/api/trilha/vincularTrilhaColab',obj,{headers:CriaHeader()}).then(res=>{
            navigate('/trilha')
            M.toast({html:`Colaborador(res) carregado(os) com sucesso!`, classes:"modal1 rounded"})
        }).catch(erro=>{
            erro.response.data.forEach(erro => M.toast({html:erro.message, classes:"modalerro rounded"}))
            console.error(erro)
        })
    }

    const handleChangeSelect = (e) => {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
          if (options[i].selected && options[i].value !== '' ) {
            value.push(options[i].value);
          }
        }
        setColabSelecionados(value)
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, Option);
      }
    

    React.useEffect(() => {
        BuscaColab()
    }, [])


    return (
        <div className="containerVincular">
            <div className="dadosContainer cursos">
                <span>Vincular Trilha</span>
            </div>

            <div className="col s12 row">
                <div className="input-field col s12 input-select seletorstatusVincular">
                  
                    <select multiple className='select' onChange={handleChangeSelect}>  
                    <option value="" disabled>Escolha o Colaborador</option>
                    {colaboradores.map((colab,index)=>(
                        <option key ={index} value={colab.id}>{colab.nome}</option>
                    ))}
                    </select>
                    <label className="labelname">Vincular Colaboradores</label>
                </div>
            </div>
            <div className="botaoSalvar">
                {/* <Link to={'/trilha'}> */}
                <a className="waves-effect waves-light btn-large btnAzulnovo" onClick={SetColabTrilha}>Salvar</a>
                {/* </Link> */}
            </div>

        </div>
    )
}
export default VincularCurso




