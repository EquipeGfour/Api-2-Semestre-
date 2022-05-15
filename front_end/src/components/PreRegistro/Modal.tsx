import React, { Component } from "react";
import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions";

interface iModalProps{
	onSelect:(gestor:iGestor)=>void
}

interface iGestor {
  id: number;
  nome: string;
  cargo: [];
}

const Modal: React.FC<iModalProps> = (props) => {
  const [gestores, setGestores] = React.useState<iGestor[]>([]);
  const [gestor, setGestor] = React.useState("");
const GetGestores = (nome) =>{
	axios.get(`/api/colab/head?gestor=${nome}`,{ headers: CriaHeader()}).then(res=>{
		setGestores(res.data)
		console.log(res)

	}).catch(err=>{
		console.log(err)
	})
}

React.useEffect(()=>{
	if (gestor !== "")GetGestores(gestor)
	
},[gestor])

  return (
    <>
      <div className="modal-content">
        <h4>Selecione o Gestor</h4>

        <div className="row">
          <div className="input-field col s12">
            <input
              value={gestor}
              placeholder="Digite "
              id="first_name2"
              type="text"
              className="validate"
              onChange={(e) => setGestor(e.target.value)}
            />

            <label className="active" htmlFor="first_name2">
              Digite um Nome
            </label>
          </div>
        </div>
				{gestores.map(g=>(
					<div className="row pointer" onClick={()=>{props.onSelect(g)}} key={g.id} >{g.nome}</div>
				))}
      </div>
      <div className="modal-footer">
        <a className="modal-close waves-effect waves-red btn-flat text-white">Fechar</a>
        
      </div>
    </>
  );
};

export default Modal;
