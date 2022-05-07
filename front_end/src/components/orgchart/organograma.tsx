import React, { Component, useState } from "react";
import OrgChart from "./mytree";
import axios from "axios";
import { CriaHeader } from "../../functions";



const Organograma: React.FC = () => {

    const [colaboradores,setColaboradores] = useState([])

  const DadosOrg = () => {
    axios.get(`/api/colab/gestor/1`, { headers: CriaHeader() }).then((res) => {
        console.log(res)
        setColaboradores(res.data);
      })
      .catch((erro) => {
        console.error(erro);
      });
  }; 


  React.useEffect(()=>{    
    document.title='Organogroma'   
    DadosOrg()    
  },[])

  return (
    <div style={{ height: "100%" }}>
      <OrgChart
        nodes={colaboradores}
      />
    </div>
  );
};

export default Organograma;
