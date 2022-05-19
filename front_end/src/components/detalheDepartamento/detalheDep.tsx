import React, {useState} from "react"
import "./style.css"
import {useCookies} from 'react-cookie'
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions"
import {Link,Navigate,useNavigate,useParams} from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize'

interface Colaborador{
  email: string
  id: number
  nome: string
  telefone: string
}

interface Cargo{
  colaboradors: Colaborador[]
  departamento_id: number
  cargo: string
  createdAt: string
  id: number
}  

const DetalheDep:React.FC=(props)=>{


  
  
  const [cargo,setCargo] = useState<Cargo[]>([])
  const [departamento,setDepartamento]= useState<string>('')
  const {id}=useParams()
  const BuscaDados = () =>{
    
    axios.get(`/api/cargo/getCargo/${id}`,{headers:CriaHeader()}).then(res=>{
      console.log(res)
      setCargo(res.data.cargos)
      setDepartamento(res.data.area)
      
      //Função do Collapsible
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, Option);          
    }).catch(erro=>{
      console.error(erro)
    })
  }

  React.useEffect(()=>{    
    document.title='Departamento-Detalhe'
    
    BuscaDados()
    
  },[])


    return(

<div className="geralContainer">
        <span className="titulo">Cargos do Departamento {departamento} </span>

      <ul className="collapsible expandable infodep1">
        {cargo.map((c:Cargo)=>(
           <li className="blocos" key={c.id}>
              <div className="collapsible-header infodep" title='Ver Colaboradores'><i className="material-icons" ></i>{c.cargo}</div>
              <div className="collapsible-body tabelaCargo">
              <table className="highlight responsive-table centered">
                <thead className="campos">
                  <tr>             
                      <th>Nome do Funcionário</th>
                      <th>Email</th>  
                      <th>Telefone</th>              
                  </tr>
                  </thead>
                  <tbody>
                    {c.colaboradors.map((colab:Colaborador)=>(
                      <tr key={colab.id}>
                        <td>{colab.nome}</td>
                        <td>{colab.email}</td>
                        <td>{colab.telefone}</td>                        
                      </tr>

                    ))}                        
                </tbody>
              </table>
              </div>
           </li>
          

    ))}
      
      </ul>
        <Link to={`/novo-cargo/${id}`} className="waves-effect waves-light btn-large btnAzulLogin">Novo Cargo</Link>
</div>
    )
}


export default DetalheDep