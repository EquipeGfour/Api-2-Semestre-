import React from "react"
import "./style.css"
import {useCookies} from 'react-cookie'
import axios from 'axios'

const GeralFunc:React.FC=(props)=>{

  const [colaboradores,setColaboradores] = React.useState([])

  const BuscaDados = () =>{

    axios.get('http://localhost:5000/colab/geral').then(res=>{
      console.log(res)
      setColaboradores(res.data.dados)

    }).catch(erro=>{
      console.error(erro)

    })

  }

  React.useEffect(()=>{
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
            <i className="material-icons">close</i>
            </div>
        </form>
        </div>
    </div>

    <table className="highlight responsive-table centered">
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

          {colaboradores.map(colab=>(
             <tr>
             <td>{colab.nome}</td>
             <td>{colab.cargo}</td>
             <td>{colab.departamento}</td>
             <td>{colab.email}</td>
             <td>{colab.telefone}</td>
           </tr>
          ))}
        </tbody>
      </table>
</div>
    )
}
export default GeralFunc