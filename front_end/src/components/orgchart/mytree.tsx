import OrgChart from '@balkangraph/orgchart.js';
import React, { Component } from 'react';

import './org.css'

interface OrgProps{
    nodes:any
    buscaColabByGestorID:(id:number)=>void
}

const MyTree: React.FC<OrgProps> = (props:OrgProps) =>{
    const divRef = React.createRef<string | HTMLElement | any>()
    let chart 

    const handleclick = (id)=>{
        props.buscaColabByGestorID(id)        
    }

    React.useEffect(()=>{
    },[props])

    React.useEffect(()=> {        
        chart = new OrgChart (divRef.current , {
            nodes: props.nodes,
            template: "ula",
            enableDragDrop: false,
            scaleInitial: 0.8,
            searchFields: ["nome", "cargo"],
            enableSearch: false,                  
            mouseScrool: OrgChart.action.ctrlZoom,

            nodeMenu: {
                Buscar: {text: "Ver mais" , onClick:handleclick, icon: OrgChart.icon.add(18, 18, 'var(--ioniccolor)')},
                details: { text: "Detalhe" },                
                add: { text: "Adicionar"},
                remove: { text: "Remover " }
            },
            nodeContextMenu: {
                edit: { text: "Editar", icon: OrgChart.icon.edit(18, 18, '#039BE5') },
                add: { text: "Adicionar", icon: OrgChart.icon.add(18, 18, '#FF8304') }
            },

            nodeBinding: {
                field_0: "nome",
                field_1: "departamento",
                field_2: "cargo",
                img: "img"
            }            
        });
    },[props])   
    
        return (
            <div className="loginContainerOrg" >
                <h1>Organograma</h1>
                <div id='tree' ref={divRef}></div>
            </div>
        );
    }
export default MyTree