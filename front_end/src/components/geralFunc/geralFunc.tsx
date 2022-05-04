import React from "react"
import "./style.css"
import {useCookies} from 'react-cookie'
import axios from 'axios'
import { CriaHeader } from "../../functions"
import ReactTooltip from 'react-tooltip';
import {Link,Navigate,useNavigate} from 'react-router-dom';

const GeralFunc:React.FC=(props)=>{

  const [colaboradores,setColaboradores] = React.useState([])

  const BuscaDados = () =>{

    axios.get('/api/colab/geral',{headers:CriaHeader()}).then(res=>{
     
      setColaboradores(res.data.dados)

    }).catch(erro=>{
      console.error(erro)

    })

  }

  React.useEffect(()=>{
    document.title='Geral-Funcionários'
    BuscaDados()
  },[])


    return(

<div className="geralContainer">
        <span className="titulo">Colaboradores</span>
    <div className="Pesquisa">


        <div className="nav-wrapper barPesquisa">
        <form>
            <div className="input-field">
            <input id="search" type="search" placeholder="Pesquisar por (Nome,Cargo,Área)" required/>
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
                  </Link></td>   
           </tr>
          ))}
        </tbody>
      </table>
</div>
    )
}
export default GeralFunc