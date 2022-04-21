import React from "react"
import "./style.css"
import {useCookies} from 'react-cookie'
import axios from 'axios'
import { CriaHeader } from "../../functions"
import {Link,Navigate,useNavigate} from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize'

const DetalheDep:React.FC=(props)=>{

  //Função do Collapsible  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, Option);
  });

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
        <span className="titulo">Cargos do Departamento (Pastelaria) </span>
  



      <ul className="collapsible expandable infodep1">
        <li className="">
          <div className="collapsible-header infodep" id="cargo1"><i className="material-icons"></i>Fritador</div>
          <div className="collapsible-body">
          <table className="highlight responsive-table centered">
                <thead className="campos">
                  <tr>             
                      <th>Nome do Funcionário</th>
                      <th>Email</th>  
                      <th>Telefone</th>              
                  </tr>
                  </thead>

                <tbody>          
                    <tr>
                      <td>Sabha das Frituras</td>
                      <td>black@sabha.com</td>
                      <td>(012) 96666-6666</td>        
                    </tr>
                    <tr>
                      <td>Masa das Massas</td>
                      <td>masa@teryaki.com</td>
                      <td>(012) 93333-3333</td>        
                    </tr>         
                </tbody>
              </table>
          </div>
        </li>
      </ul>

      <ul className="collapsible expandable infodep1">
        <li className="">
          <div className="collapsible-header infodep" id="cargo2"><i className="material-icons"></i>Fritador</div>
          <div className="collapsible-body">
          <table className="highlight responsive-table centered">
                <thead className="campos">
                  <tr>             
                      <th>Nome do Funcionário</th>
                      <th>Email</th>  
                      <th>Telefone</th>              
                  </tr>
                  </thead>

                <tbody>          
                    <tr>
                      <td>Sabha das Frituras</td>
                      <td>black@sabha.com</td>
                      <td>(012) 96666-6666</td>        
                    </tr>
                    <tr>
                      <td>Masa das Massas</td>
                      <td>masa@teryaki.com</td>
                      <td>(012) 93333-3333</td>        
                    </tr>         
                </tbody>
              </table>
          </div>
        </li>
      </ul>

      <ul className="collapsible expandable infodep1">
        <li className="">
          <div className="collapsible-header infodep" id="cargo1"><i className="material-icons"></i>Fritador</div>
          <div className="collapsible-body">
          <table className="highlight responsive-table centered">
                <thead className="campos">
                  <tr>             
                      <th>Nome do Funcionário</th>
                      <th>Email</th>  
                      <th>Telefone</th>              
                  </tr>
                  </thead>

                <tbody>          
                    <tr>
                      <td>Sabha das Frituras</td>
                      <td>black@sabha.com</td>
                      <td>(012) 96666-6666</td>        
                    </tr>
                    <tr>
                      <td>Masa das Massas</td>
                      <td>masa@teryaki.com</td>
                      <td>(012) 93333-3333</td>        
                    </tr>         
                </tbody>
              </table>
          </div>
        </li>
      </ul>

      <ul className="collapsible expandable infodep1">
        <li className="">
          <div className="collapsible-header infodep" id="cargo2"><i className="material-icons"></i>Fritador</div>
          <div className="collapsible-body">
          <table className="highlight responsive-table centered">
                <thead className="campos">
                  <tr>             
                      <th>Nome do Funcionário</th>
                      <th>Email</th>  
                      <th>Telefone</th>              
                  </tr>
                  </thead>

                <tbody>          
                    <tr>
                      <td>Sabha das Frituras</td>
                      <td>black@sabha.com</td>
                      <td>(012) 96666-6666</td>        
                    </tr>
                    <tr>
                      <td>Masa das Massas</td>
                      <td>masa@teryaki.com</td>
                      <td>(012) 93333-3333</td>        
                    </tr>         
                </tbody>
              </table>
          </div>
        </li>
      </ul>

      <ul className="collapsible expandable infodep1">
        <li className="">
          <div className="collapsible-header infodep" id="cargo1"><i className="material-icons"></i>Fritador</div>
          <div className="collapsible-body">
          <table className="highlight responsive-table centered">
                <thead className="campos">
                  <tr>             
                      <th>Nome do Funcionário</th>
                      <th>Email</th>  
                      <th>Telefone</th>              
                  </tr>
                  </thead>

                <tbody>          
                    <tr>
                      <td>Sabha das Frituras</td>
                      <td>black@sabha.com</td>
                      <td>(012) 96666-6666</td>        
                    </tr>
                    <tr>
                      <td>Masa das Massas</td>
                      <td>masa@teryaki.com</td>
                      <td>(012) 93333-3333</td>        
                    </tr>         
                </tbody>
              </table>
          </div>
        </li>
      </ul>

      <ul className="collapsible expandable infodep1">
        <li className="">
          <div className="collapsible-header infodep" id="cargo2"><i className="material-icons"></i>Fritador</div>
          <div className="collapsible-body">
          <table className="highlight responsive-table centered">
                <thead className="campos">
                  <tr>             
                      <th>Nome do Funcionário</th>
                      <th>Email</th>  
                      <th>Telefone</th>              
                  </tr>
                  </thead>

                <tbody>          
                    <tr>
                      <td>Sabha das Frituras</td>
                      <td>black@sabha.com</td>
                      <td>(012) 96666-6666</td>        
                    </tr>
                    <tr>
                      <td>Masa das Massas</td>
                      <td>masa@teryaki.com</td>
                      <td>(012) 93333-3333</td>        
                    </tr>         
                </tbody>
              </table>
          </div>
        </li>
      </ul>

      <ul className="collapsible expandable infodep1">
        <li className="">
          <div className="collapsible-header infodep" id="cargo1"><i className="material-icons"></i>Fritador</div>
          <div className="collapsible-body">
          <table className="highlight responsive-table centered">
                <thead className="campos">
                  <tr>             
                      <th>Nome do Funcionário</th>
                      <th>Email</th>  
                      <th>Telefone</th>              
                  </tr>
                  </thead>

                <tbody>          
                    <tr>
                      <td>Sabha das Frituras</td>
                      <td>black@sabha.com</td>
                      <td>(012) 96666-6666</td>        
                    </tr>
                    <tr>
                      <td>Masa das Massas</td>
                      <td>masa@teryaki.com</td>
                      <td>(012) 93333-3333</td>        
                    </tr>         
                </tbody>
              </table>
          </div>
        </li>
      </ul>

      <ul className="collapsible expandable infodep1">
        <li className="">
          <div className="collapsible-header infodep" id="cargo2"><i className="material-icons"></i>Fritador</div>
          <div className="collapsible-body">
          <table className="highlight responsive-table centered">
                <thead className="campos">
                  <tr>             
                      <th>Nome do Funcionário</th>
                      <th>Email</th>  
                      <th>Telefone</th>              
                  </tr>
                  </thead>

                <tbody>          
                    <tr>
                      <td>Sabha das Frituras</td>
                      <td>black@sabha.com</td>
                      <td>(012) 96666-6666</td>        
                    </tr>
                    <tr>
                      <td>Masa das Massas</td>
                      <td>masa@teryaki.com</td>
                      <td>(012) 93333-3333</td>        
                    </tr>         
                </tbody>
              </table>
          </div>
        </li>
      </ul>

      <ul className="collapsible expandable infodep1">
        <li className="">
          <div className="collapsible-header infodep" id="cargo1"><i className="material-icons"></i>Fritador</div>
          <div className="collapsible-body">
          <table className="highlight responsive-table centered">
                <thead className="campos">
                  <tr>             
                      <th>Nome do Funcionário</th>
                      <th>Email</th>  
                      <th>Telefone</th>              
                  </tr>
                  </thead>

                <tbody>          
                    <tr>
                      <td>Sabha das Frituras</td>
                      <td>black@sabha.com</td>
                      <td>(012) 96666-6666</td>        
                    </tr>
                    <tr>
                      <td>Masa das Massas</td>
                      <td>masa@teryaki.com</td>
                      <td>(012) 93333-3333</td>        
                    </tr>         
                </tbody>
              </table>
          </div>
        </li>
      </ul>

      <ul className="collapsible expandable infodep1">
        <li className="">
          <div className="collapsible-header infodep" id="cargo10"><i className="material-icons"></i>Fritador</div>
          <div className="collapsible-body">
          <table className="highlight responsive-table centered">
                <thead className="campos">
                  <tr>             
                      <th>Nome do Funcionário</th>
                      <th>Email</th>  
                      <th>Telefone</th>              
                  </tr>
                  </thead>

                <tbody>          
                    <tr>
                      <td>Sabha das Frituras</td>
                      <td>black@sabha.com</td>
                      <td>(012) 96666-6666</td>        
                    </tr>
                    <tr>
                      <td>Masa das Massas</td>
                      <td>masa@teryaki.com</td>
                      <td>(012) 93333-3333</td>        
                    </tr>         
                </tbody>
              </table>
          </div>
        </li>
      </ul>

      <ul className="collapsible expandable infodep1">
        <li className="">
          <div className="collapsible-header infodep" id="cargo11"><i className="material-icons"></i>Fritador</div>
          <div className="collapsible-body">
          <table className="highlight responsive-table centered">
                <thead className="campos">
                  <tr>             
                      <th>Nome do Funcionário</th>
                      <th>Email</th>  
                      <th>Telefone</th>              
                  </tr>
                  </thead>

                <tbody>          
                    <tr>
                      <td>Sabha das Frituras</td>
                      <td>black@sabha.com</td>
                      <td>(012) 96666-6666</td>        
                    </tr>
                    <tr>
                      <td>Masa das Massas</td>
                      <td>masa@teryaki.com</td>
                      <td>(012) 93333-3333</td>        
                    </tr>         
                </tbody>
              </table>
          </div>
        </li>
      </ul>

      <ul className="collapsible expandable infodep1">
        <li className="">
          <div className="collapsible-header infodep" id="cargo12"><i className="material-icons"></i>Fritador</div>
          <div className="collapsible-body">
          <table className="highlight responsive-table centered">
                <thead className="campos">
                  <tr>             
                      <th>Nome do Funcionário</th>
                      <th>Email</th>  
                      <th>Telefone</th>              
                  </tr>
                  </thead>

                <tbody>          
                    <tr>
                      <td>Sabha das Frituras</td>
                      <td>black@sabha.com</td>
                      <td>(012) 96666-6666</td>        
                    </tr>
                    <tr>
                      <td>Masa das Massas</td>
                      <td>masa@teryaki.com</td>
                      <td>(012) 93333-3333</td>        
                    </tr>         
                </tbody>
              </table>
          </div>
        </li>
      </ul>

      <a className="waves-effect waves-light btn-large btnAzulLogin">Novo Cargo</a>
</div>
    )
}


export default DetalheDep