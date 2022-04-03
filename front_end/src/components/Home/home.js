import React from "react"
import "./style.css"
import Colab from '../img/colab.png'
import Organograma from '../img/organograma.png'
import Trilha from '../img/trilha.png'
import Holerite from '../img/holerite.png'
import Desligado from '../img/desligado.png'
import PreRegistro from '../img/preregistro.png'

function Home (){
    return(
    <div className="loginContainer">
            <h3>Bem-Vindo Administrador</h3>
        
        
        <div className="row blocoCima">
            
            
            
            <div className="col s4 divColab">            
            <button className=" waves-effect  botaoFunc"><img className="imgColab" src={Colab}></img></button>
                <div className="btnNome">Colaborador</div>         
            </div>

            <div class="col s4">
            <button className="waves-effect botaoFunc"><img className="imgColab" src={Organograma}></img></button>
                <div className="btnNome">Organograma</div>            
            </div>


            <div class="col s4">
            <button className="waves-effect botaoFunc"><img className="imgColab" src={Trilha}></img></button>
                <div className="btnNome">Desenvolvimento</div>
            </div>


        </div>




        <div className="row blocoBaixo">

            <div class=" col s4">
                <button className="waves-effect botaoFunc"><img className="imgColab" src={Desligado}></img></button>
                <div className="btnNome">Desligados</div>
            </div>

            <div class="col s4">
            <button className="waves-effect botaoFunc"><img className="imgColab" src={Holerite}></img></button>
                <div className="btnNome">Financeiro</div>
            </div>

            <div class="col s4">
            <button className="waves-effect botaoFunc"><img className="imgColab" src={PreRegistro}></img></button>
                <div className="btnNome">Pré-Registro</div>
            </div>

        </div>

        
        
    </div>      
        
    
        
        
        
        
    )
}

export default Home