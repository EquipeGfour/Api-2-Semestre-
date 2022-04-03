import React from "react"
import "./style.css"


function GeralFunc (){
    return(

<div className="geralContainer">
        <span className="titulo">Colaboradores</span>
    <div className="Pesquisa">


        <div class="nav-wrapper barPesquisa">
        <form>
            <div class="input-field">
            <input id="search" type="search" placeholder="Pesquisar por (Nome,Cargo,Área)" required/>
            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
            <i class="material-icons">close</i>
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
          <tr>
            <td>Alvin</td>
            <td>Diretor</td>
            <td>Marketing</td>
            <td>Alvin@fatec.sp.gov.br</td>
            <td>(012) 99191-1234</td>
          </tr>

          <tr>
            <td>Alvin</td>
            <td>Diretor</td>
            <td>Marketing</td>
            <td>Alvin@fatec.sp.gov.br</td>
            <td>(012) 99191-1234</td>
          </tr>

        </tbody>
      </table>
</div>
    )
}
export default GeralFunc