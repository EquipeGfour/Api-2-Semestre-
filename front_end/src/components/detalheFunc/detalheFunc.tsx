import React from "react"
import "./style.css"
import {useCookies} from 'react-cookie'
import axios from 'axios'
import { CriaHeader } from "../../functions"
import Colab from '../img/colab.png'
import M from 'materialize-css/dist/js/materialize'

const DetalheFunc:React.FC=(props)=>{
  document.title='Detalhe-Funcionário'

  // const [colaboradores,setColaboradores] = React.useState([])

  // const BuscaDados = () =>{

  //   axios.get('http://localhost:5000/colab/geral',{headers:CriaHeader()}).then(res=>{
  //     console.log(res)
  //     setColaboradores(res.data.dados)

  //   }).catch(erro=>{
  //     console.error(erro)

  //   })

  // }

  React.useEffect(()=>{
    var el = document.querySelector('#tabs-swipe-demo')
    var instance = M.Tabs.init(el, Option);
  //   document.title='Geral-Funcionários'
  //   BuscaDados()
  },[])


    return(
<div>
  <div className="container">
    <img className="responsive-img fotoColab" src="https://i1.sndcdn.com/avatars-000326011759-902upi-t500x500.jpg"/> 
      <div className="row">
        <form className="col s12 dadosBasicos">
          <div className="">
            <div className="input-field col s4">            
              <input id="dadoRecebido" type="text" className="validate"/>
              <label className="fonte" htmlFor="icon_prefix">Nome Completo</label>
            </div>
          </div>      
          <div className="input-field col s4">            
              <input id="dadoRecebido" type="text" className="validate"/>
              <label className="fonte" htmlFor="icon_prefix">Departamento</label>
          </div>
          <div className="input-field col s4">            
              <input id="dadoRecebido" type="text" className="validate"/>
              <label className="fonte" htmlFor="icon_prefix">Cargo</label>
          </div>       

        </form>     

      </div> 

{/* -----------------------------------ABAS DO FUNCIONÁRIO------------------------------------------- */}
  </div>
    <div className="container">
      <ul id="tabs-swipe-demo" className="tabs cabecalho">
        <li className="tab col s3"><a href="#test-swipe-2">Dados Pessoais</a></li>
        <li className="tab col s3"><a href="#test-swipe-1">Endereço</a></li>
        <li className="tab col s3"><a href="#test-swipe-3">Dados Acadêmicos</a></li>
        <li className="tab col s3"><a href="#test-swipe-4">Contrato</a></li>
      </ul>

      
      <div id="test-swipe-2" className="col s12">
        <form>
          <div className="col s12 dadosPessoais">
            <div className="row">
              <div className=" input-field col s4 espaço">
                <input placeholder="CPF" id="first_name2" type="text" className="validate dadoRecebido1" />
                <label className="active fonte" htmlFor="first_name2">CPF</label>
              </div>
              <div className=" input-field col s4 espaço">
                <input placeholder="Nacionalidade" id="first_name2" type="text" className="validate"/>
                <label className="active fonte" htmlFor="first_name2">Nacionalidade</label>
              </div>

              <div className=" input-field col s4 espaço">
                <input placeholder="Naturalidade" id="first_name2" type="text" className="validate"/>
                <label className="active fonte" htmlFor="first_name2">Naturalidade</label>
              </div>
            </div>

            <div className="row">
              <div className=" input-field col s4 espaço">
                <input placeholder="Email" id="first_name2" type="text" className="validate dadoRecebido1" />
                <label className="active fonte" htmlFor="first_name2">Email</label>
              </div>
              <div className=" input-field col s4 espaço">
                <input placeholder="Gênero" id="first_name2" type="text" className="validate"/>
                <label className="active fonte" htmlFor="first_name2">Gênero</label>
              </div>

              <div className=" input-field col s4 espaço">
                <input placeholder="Telefone" id="first_name2" type="text" className="validate"/>
                <label className="active fonte" htmlFor="first_name2">Telefone</label>
              </div>
            </div>

            <div className="row">
              <div className=" input-field col s4 espaço">
                <input placeholder="Raça" id="first_name2" type="text" className="validate dadoRecebido1" />
                <label className="active fonte" htmlFor="first_name2">Raça</label>
              </div>
              <div className=" input-field col s4 espaço">
                <input placeholder="Data Nascimento" id="first_name2" type="text" className="validate"/>
                <label className="active fonte" htmlFor="first_name2">Data Nascimento</label>
              </div>              
            </div>          
          </div>  
        </form>
      </div>


{/* -----------------------------------ENDEREÇO------------------------------------------- */}      
      <div id="test-swipe-1" className="col s12 ">
        <form>
            <div className="col s12 dadosPessoais">
              <div className="row">
                <div className=" input-field col s4 espaço">
                  <input placeholder="Endereço" id="first_name2" type="text" className="validate"/>
                  <label className="active fonte" htmlFor="first_name2">Endereço</label>
                </div>
                <div className=" input-field col s4 espaço">
                  <input placeholder="Estado" id="first_name2" type="text" className="validate dadoRecebido1" />
                  <label className="active fonte" htmlFor="first_name2">Estado</label>
                </div>
                <div className=" input-field col s4 espaço">
                  <input placeholder="Cidade" id="first_name2" type="text" className="validate"/>
                  <label className="active fonte" htmlFor="first_name2">Cidade</label>
                </div>
              </div>

              <div className="row">
                <div className=" input-field col s4 espaço">
                  <input placeholder="Bairro" id="first_name2" type="text" className="validate"/>
                  <label className="active fonte" htmlFor="first_name2">Bairro</label>
                </div>
                <div className=" input-field col s4 espaço">
                  <input placeholder="CEP" id="first_name2" type="text" className="validate dadoRecebido1" />
                  <label className="active fonte" htmlFor="first_name2">CEP</label>
                </div>
                <div className=" input-field col s4 espaço">
                  <input placeholder="Complemento" id="first_name2" type="text" className="validate"/>
                  <label className="active fonte" htmlFor="first_name2">Complemento</label>
                </div>
              </div>
              <div className="row">            
                <div className=" input-field col s4 espaço">
                  <input placeholder="Região" id="first_name2" type="text" className="validate"/>
                  <label className="active fonte" htmlFor="first_name2">Região</label>
                </div>
              </div>
            </div>
        </form>
      </div>

{/* -----------------------------------DADOS ACADÊMICOS------------------------------------------- */}
      <div id="test-swipe-3" className="col s12 ">
        <form>
            <div className="col s12 dadosPessoais">
              <div className="row">
                  <div className=" input-field col s4 espaço">
                    <input placeholder="Formação" id="first_name2" type="text" className="validate"/>
                    <label className="active fonte" htmlFor="first_name2">Formação</label>
                  </div>
                  <div className=" input-field col s4 espaço">
                    <input placeholder="Curso" id="first_name2" type="text" className="validate dadoRecebido1" />
                    <label className="active fonte" htmlFor="first_name2">Curso</label>
                  </div>
                  <div className=" input-field col s4 espaço">
                    <input placeholder="Idiomas" id="first_name2" type="text" className="validate"/>
                    <label className="active fonte" htmlFor="first_name2">Idiomas</label>
                  </div>
                </div>

                <div className="row">
                  <div className=" input-field col s4 espaço">
                    <input placeholder="Status" id="first_name2" type="text" className="validate"/>
                    <label className="active fonte" htmlFor="first_name2">Status</label>
                  </div>
                </div>
            </div>
        </form>
      </div>
{/* -----------------------------------CONTRATO------------------------------------------- */}
      <div id="test-swipe-4" className="col s12 ">
        <form>
            <div className="col s12 dadosPessoais">
            </div>
        </form>
      </div> 
  </div>
</div>
)}
//         {/* <div className="nav-wrapper barPesquisa">
//         <form>
//             <div className="input-field">
//             <input id="search" type="search" placeholder="Pesquisar por (Nome,Cargo,Área)" required/>
//             <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
//             <i className="material-icons">close</i>
//             </div>
//         </form>
//         </div>
//     </div>

//     <table className="highlight responsive-table tablefunc centered">
//         <thead className="campos">
//           <tr>
//               <th>Nome</th>
//               <th>Cargo</th>
//               <th>Área</th>
//               <th>Email</th>
//               <th>Telefone</th>
              
//           </tr>


//         </thead>

//         <tbody>

//           {colaboradores.map((colab,index)=>(
//              <tr key={index}>
//              <td>{colab.nome}</td>
//              <td>{colab.Cargo?.cargo}</td>
//              <td>{colab.Cargo?.Departamento?.area}</td>
//              <td>{colab.email}</td>
//              <td>{colab.telefone}</td>
//            </tr>
//           ))}
//         </tbody>
//       </table>
// </div> */}
//     )
// }
export default DetalheFunc