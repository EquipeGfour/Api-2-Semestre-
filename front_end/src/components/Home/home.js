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
                <img className="imgColab" src={Colab}></img>
                <div>Colaborador</div>         
            </div>

            <div class="col s4">
                <img className="imgColab" src={Organograma}></img>
                <div>Organograma</div>            
            </div>


            <div class="col s4">
                <img className="imgColab" src={Trilha}></img>
                <div>Desenvolvimento</div>
            </div>


        </div>




        <div className="row blocoBaixo">

            <div class="col s4">
                <img className="imgColab" src={Desligado}></img>
                <div>Desligado</div>
            </div>

            <div class="col s4">
                <img className="imgColab" src={Holerite}></img>
                <div>Demonstrativos</div>
            </div>

            <div class="col s4">
                <img className="imgColab" src={PreRegistro}></img>
                <div>Pré-Registro</div>
            </div>

        </div>

        
        
    </div>      
        
    
        
        
        
        
    )
}

export default Home