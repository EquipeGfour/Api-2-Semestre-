import React, { useState } from "react"
import "./style.css"
import {useCookies} from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import {Link,Navigate,useNavigate} from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize'
import ReactTooltip from 'react-tooltip';

interface Departamento{
  Cargos: any[]
  id: number
  area: string
  head: string
  qtdCargos: number
  totalColab: number
}



const GeralDep:React.FC=(props)=>{

  const [departamento,setDepartamento] = useState<Departamento[]>([])
  const [searchDepart, setSearchDepart] = useState('')
  const cancelar = React.useRef<any>()

  const BuscaDados = () =>{
    axios.get('/api/departamento/getAllDepart',{headers:CriaHeader()}).then((res)=>{      
      setDepartamento(res.data)
    }).catch(erro=>{
      console.error(erro)
    })
  }

  const searchDepartamento = (searchDepart) => {
    if(cancelar.current){
      cancelar.current.cancel()
    }
      const cancelToken = axios.CancelToken
      cancelar.current = cancelToken.source()
    axios.get(`/api/departamento/searchDepartamento?area=${searchDepart}`, {headers:CriaHeader(),cancelToken:cancelar.current.token}).then( res => {
      setDepartamento(res.data)
    }).catch(erro=>{
      console.error(erro)
    })
  }

  React.useEffect(()=>{    
    document.title='Departamentos-Geral'
    BuscaDados()    
  },[])

  React.useEffect(() => {
    searchDepartamento(searchDepart)
  },[searchDepart])


  return(

  <div className="geralContainer">
        <span className="titulo">Departamentos</span>
      <div className="Pesquisa">
        <div className="nav-wrapper barPesquisa">
          <form>
              <div className="input-field">
              <input value={searchDepart} id="search" type="search" placeholder="Pesquisar por (Nome,Cargo,Área)" required onChange={ (e) => setSearchDepart( e.target.value )}/>
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
              </div>
          </form>
          </div>
      </div>

        <table className="highlight responsive-table tablegeral centered">
          <thead className="campos">
            <tr>
                <th>Nome Departamento</th>
                <th>Num.Funcionários</th>
                <th>Num. de Cargos</th>             
            </tr>
          </thead>

          <tbody>
            {departamento.map((d:Departamento)=>(
                <tr key={d.id}>
                  <td>{d.area}</td>
                  <td>{d.totalColab}</td>
                  <td>{d.qtdCargos}</td>
                  <td><Link to={`/detalhe-departamento/${d.id}`}>
                    <ReactTooltip />                  
                    <i className="material-icons" data-tip='Ver Cargos'>search</i>
                    </Link></td>   
                  <td><i className="material-icons delete" data-tip='Deletar Departamento'>delete_forever</i></td>             
                </tr>
            ))}       
          </tbody>
        </table>
        <Link to={"/novo-departamento"} className="waves-effect waves-light btn-large btnAzulLogin">Novo Departamento</Link>
  </div>
)
}
export default GeralDep