import React, { Component } from 'react';
import OrgChart from '@balkangraph/orgchart.js';
import './org.css'

export default class extends Component {

    constructor(props) {
        super(props);
        this.divRef = React.createRef();
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        this.chart = new OrgChart (this.divRef.current , {
            nodes: this.props.nodes,
            template: "ula",
            scaleInitial: 1,
            enableSearch: false,
            
            
            mouseScrool: OrgChart.action.ctrlZoom,

            nodeMenu: {
                details: { text: "Details" },
                edit: { text: "Edit" },
                add: { text: "Add" },
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
                img_0: "img"
            },          
            
        });
    }

    render() {
        return (
            <div className="loginContainer" >
                <h1>Organograma</h1>
                <div id='tree' ref={this.divRef}></div>
            </div>
        );
    }
}