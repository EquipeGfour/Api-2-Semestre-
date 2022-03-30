import React from "react"
import "./style.css"
import {MdCloudUpload} from "react-icons/md"

function Upload (){
    return(

<div className="loginContainer">
            <h1>Uploads</h1>
            
            <div className="row">
                <a className="waves-effect waves-light btn-large btnCarregar" ><MdCloudUpload className="Nuvem"/>Clique para carregar</a>
                
                
                <div className="row checkBox">
                    <p>
                        <label>
                            <input type="checkbox" class="filled-in"  />
                            <span>Eu aceito os Termos de Uso</span>
                        </label>
                    </p>
                

                
                    <p>
                        <label>
                            <input type="checkbox" class="filled-in"  />
                            <span className="box2">Eu aceito a Política de Privacidade</span>
                        </label>
                    </p>
                </div>

            </div>
            

            
            
    

   

           
            <a className="waves-effect waves-light btn-large btnAzul">Carregar</a>
   
</div> 












    )
}

export default Upload