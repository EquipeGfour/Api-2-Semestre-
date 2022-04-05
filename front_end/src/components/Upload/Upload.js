import React from "react"
import "./styleup.css"
import {MdCloudUpload} from "react-icons/md"
import {TextInput} from "react-materialize"

function Upload (){
    return(

<div className="uploadContainer">
            <h1>Uploads</h1>
            
            <div className="row">
            <div className="file-field input-field">
                <div class=" waves-effect waves-light  btnCarregar">
                    <span><MdCloudUpload className="Nuvem"/>Clique para carregar</span>
                    <input type="file"/>
                </div>
               
                
                </div>
                
                
                
                
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
            

            
            
    

   

           
            <a className="waves-effect waves-light btn-large btnAzulCarregar">Carregar</a>
   
</div> 












    )
}

export default Upload