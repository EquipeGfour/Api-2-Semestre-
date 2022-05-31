import React, { Component, useState } from "react";
import OrgChart from "./mytree";
import axios from "../../functions/axios";
import { CriaHeader } from "../../functions";

const Organograma: React.FC = () => {

  const [colaboradores,setColaboradores] = useState([])

  const DadosOrg = () => {
    axios.get(`/api/colab/gestor/1`, { headers: CriaHeader() }).then((res) => {       
        setColaboradores(res.data.map(c=>({...c,cargo:c.cargo?.cargo||'', departamento:c.cargo?.departamento?.area||''})));
      })
      .catch((erro) => {
        console.error(erro);
      });
  };
  
  const DadosOrgGestor = (id:number) =>{
    axios.get(`/api/colab/gestor/${id}`, { headers: CriaHeader() }).then((res) => {
      const dados = res.data.filter(colab=>colab.pid)
      console.log(dados,res.data)
      const manipulado = dados.map(c=>({
        ...c,
        cargo:c.cargo?.cargo||'', 
        departamento:c.cargo?.departamento?.area||''
      }))
      setColaboradores([
        ...manipulado,     
        ...colaboradores
      ])
    }) 
  }

  React.useEffect(()=>{    
    document.title='Organogroma'   
    DadosOrg() 
  },[])

  return (
    <div style={{ height: "100%" }}>
      <OrgChart
        nodes={colaboradores}
        buscaColabByGestorID={DadosOrgGestor}
      />
    </div>
  );
};

export default Organograma;
