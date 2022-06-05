import React, { useState } from "react"
import "./style.css"
import {useCookies} from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import ReactTooltip from 'react-tooltip';
import {Link,Navigate,useNavigate} from 'react-router-dom';
import { MdSettingsBackupRestore } from "react-icons/md";
import M from 'materialize-css/dist/js/materialize';

const GeralFunc:React.FC=(props)=>{
  const [colaboradores,setColaboradores] = React.useState([])
  const [searchColab, setSearchColab ] = useState('')
  const cancelar = React.useRef<any>()

  const BuscaDados = () =>{
    axios.get('/api/colab/geral',{headers:CriaHeader()}).then(res=>{
      setColaboradores(res.data.dados)
    }).catch(erro=>{
      console.error(erro)
    })
  }

      
  const searchColaborador = (searchColab) => {
    if(cancelar.current){
      cancelar.current.cancel()
    }
      const cancelToken = axios.CancelToken
      cancelar.current = cancelToken.source()
    axios.get(`/api/colab/searchColaborador?nome=${searchColab}`,{ headers: CriaHeader()}).then( res => {
      setColaboradores(res.data)

    }).catch(err=>{
      console.log(err)
    })
  }

  const desligarColab = (id,email) =>{    
    axios.put(`api/colab/updateColab/${id}?email=${email}`, null, {headers:CriaHeader()} ).then(res=>{       
      const Novalista = colaboradores.filter((c)=>c.id !== id)
      setColaboradores(Novalista)
      M.toast({html: "Colaborador Desligado com sucesso!",classes: "modal1 round"})
    }).catch(erro=>{
      console.error(erro);      
    })
  }

  React.useEffect(()=>{
    document.title='Geral-Funcionários'
    BuscaDados()    
  },[])

  React.useEffect(() => {
    searchColaborador(searchColab)
},[searchColab])

  return(

  <div className="geralContainer">
          <span className="titulo">Colaboradores</span>

      <div className="Pesquisa">
          <div className="nav-wrapper barPesquisa">
          <form>
              <div className="input-field">
              <input value={searchColab} id="search" type="search" placeholder="Pesquisar por (Nome,Cargo,Área)" required onChange={ (e) => setSearchColab( e.target.value ) }/>
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons pesquisa">close</i>
              </div>
          </form>
          </div>
      </div>

      <table className="highlight responsive-table tablefunc centered">
          <thead className="campos">
            <tr>
                <th>Nome</th>
                <th>Cargo</th>
                <th>Área</th>
                <th>Email</th>
                <th>Telefone</th>              
            </tr>
          </thead>

          <tbody>
            {colaboradores.map((colab,index)=>(
              <tr key={index}>
              <td>{colab.nome}</td>
              <td>{colab.cargo?.cargo}</td>
              <td>{colab.cargo?.departamento?.area}</td>
              <td>{colab.email}</td>
              <td>{colab.telefone}</td>
              <td><Link to={`/detalhe-funcionario/${colab.id}`}>
                    <ReactTooltip />               
                    <i className="material-icons" data-tip='Ver Funcionário'>search</i>                  
                    </Link>
              </td>
              <td><Link to={``}>
                                  
                    <i className="material-icons desligar" onClick={()=>desligarColab(colab.id,colab.email)} data-tip='Desligar Colaborador'>power_settings_new</i>                  
                    </Link>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
  </div>
  )
}
export default GeralFunc