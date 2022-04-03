import React from "react"
import "./style.css"

function Upload (){
    return(

<div className="loginContainer">
            <h1>Upload</h1>
        <div className="centralizar">
        <h6>Arquivo </h6>
        <form action="#">
    <div className="file-field input-field">
        <div className="btn">
    <span>File</span>
        
        
        <input type="file" multiple/>
      </div>
      
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" placeholder="Clique para carregar"/>
      </div>
    </div>
    
   </form>

            </div>

            
            <a className="waves-effect waves-light btn-large btnAzul">Entrar</a>

</div> 










//         <div>

// <form action="#">
//     <div className="file-field input-field">
//       <div className="btn">
//         <span>File</span>
//         <input type="file" multiple/>
//       </div>
      
//       <div className="file-path-wrapper">
//         <input className="file-path validate" type="text" placeholder="Upload one or more files"/>
//       </div>
//     </div>
    
//   </form>

//     <label>
//         <input type="checkbox" className="filled-in"  />
//         <span>Eu aceito os Termos de Uso.</span>
//       </label>
//       <label>
//         <input type="checkbox" className="filled-in"  />
//         <span>Eu aceito a politica de privacidade.</span>
//       </label>

//             <a className="waves-effect waves-light btn-large btnAzul">Registrar</a>
//         </div>

    )
}

export default Upload