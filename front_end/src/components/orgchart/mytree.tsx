import OrgChart from '@balkangraph/orgchart.js';
import React, { Component } from 'react';

import './org.css'

interface OrgProps{
    nodes:any
}

const MyTree: React.FC<OrgProps> = (props:OrgProps) =>{
    const divRef = React.createRef<string | HTMLElement | any>()
    let chart 

    const handleclick = (id)=>{
        console.log(id)
    }

    React.useEffect(()=> {
        
        chart = new OrgChart (divRef.current , {
            nodes: props.nodes,
            template: "ula",
            scaleInitial: 0.8,
            searchFields: ["nome", "cargo"],
            enableSearch: true,                  
            mouseScrool: OrgChart.action.ctrlZoom,

            nodeMenu: {
                details: { text: "Details" },                
                add: { text: "Add", onClick:handleclick },
                remove: { text: "Remove" }
            },
            nodeContextMenu: {
                edit: { text: "Edit", icon: OrgChart.icon.edit(18, 18, '#039BE5') },
                add: { text: "Add", icon: OrgChart.icon.add(18, 18, '#FF8304') }
            },

            collapse: {
                level: 2
            },

            nodeBinding: {
                field_0: "nome",
                field_1: "cargo",
                field_2: "departamento",
                img: "img"

            }
              
        });
    })   
   
        return (
            <div className="loginContainerOrg" >
                <h1>Organograma</h1>
                <div id='tree' ref={divRef}></div>
            </div>
        );
    }
export default MyTree