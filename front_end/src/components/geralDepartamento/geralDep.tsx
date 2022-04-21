import React from "react"
import "./style.css"
import {useCookies} from 'react-cookie'
import axios from 'axios'
import { CriaHeader } from "../../functions"
import {Link,Navigate,useNavigate} from 'react-router-dom';

const GeralDep:React.FC=(props)=>{

  // const [colaboradores,setColaboradores] = React.useState([])

  // const BuscaDados = () =>{

  //   axios.get('http://localhost:5000/colab/geral',{headers:CriaHeader()}).then(res=>{
  //     console.log(res)
  //     setColaboradores(res.data.dados)

  //   }).catch(erro=>{
  //     console.error(erro)

  //   })

  // }

  // React.useEffect(()=>{
  //   BuscaDados()
  // },[])


    return(

<div className="geralContainer">
        <span className="titulo">Departamentos</span>
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
              <th>Nome Departamento</th>
              <th>Funcionários</th>
              <th>Responsável</th>
              <th>Cargos</th>
              
              
              
          </tr>


        </thead>

        <tbody>

          
             <tr>
              <td>Pastelaria</td>
              <td>5</td>
              <td>Masanori Do Pastel</td>
              <td>5</td>
              <td> <i className="material-icons">fullscreen</i></td>   
              <td> <i className="material-icons">delete_forever</i></td>             
            </tr>

            <tr>
              <td>Acadêmico</td>
              <td>3</td>
              <td>Arakaki do Oriente</td>
              <td>20</td>
              <td> <i className="material-icons">fullscreen</i></td>  
              <td> <i className="material-icons">delete_forever</i></td>             
            </tr>
          
        </tbody>
      </table>

      <a className="waves-effect waves-light btn-large btnAzulLogin">Novo Departamento</a>
</div>
    )
}
export default GeralDep