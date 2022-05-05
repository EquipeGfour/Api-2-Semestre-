import React, { Component } from 'react';
        import OrgChart from './mytree';

        export default class App extends Component {
            constructor(props) {
                super(props);
            }

            render() {
                return (
                    
                    <div style={{height: '100%'}}>

                        <OrgChart nodes={[
                            { id: 1, nome: "Felipe", cargo: "CEO", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            { id: 2, pid: 1, nome: "Apu", tags: ["assistant"], cargo: "Indiano Pleno", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            { id: 3, pid: 1, nome: "Natalia", cargo:"Head Product Owner", departamento:"Valhala", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            { id: 4, pid: 1, nome: "Rafael", cargo:"Head Aposentados", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            { id: 5, pid: 1, nome: "Nicolas", cargo:"Head Backend", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            { id: 6, pid: 1, nome: "Rodrigo", cargo:"Head Scrum Master", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            { id: 7, pid: 1, nome: "Raniel", cargo:"Head Frontend", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            { id: 8, pid: 1, nome: "Gustavo", cargo:"Head T.I", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            //PO
                            { id: 9, pid: 3, nome: "Ragnar", cargo:"Product Owner", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            // { id: 9, pid: 8, nome: "Largetha", cargo:"Arqueira", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            // { id: 10, pid: 8, nome: "Thor", cargo:"Cozinheiro", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            // { id: 23, pid: 10, nome: "Odin", cargo:"Cozinheiro", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            //Aposentados
                            { id: 10, pid: 4, nome: "Matu", cargo:"Aposentado do INSS", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            // { id: 12, pid: 11, nome: "Adao", cargo:"Segundo Homem", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            // { id: 13, pid: 11, nome: "Eva", cargo:"Primeira Mulher", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            //Backend
                            { id: 11, pid: 5, nome: "Selva Ganesh", cargo:"Dev Backend Senior", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            // { id: 15, pid: 14, nome: "Raj", cargo:"Indiano Pleno", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            // { id: 16, pid: 14, nome: "Sundar Pichai", cargo:"Indiano Google", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            //Scrums
                            { id: 12, pid: 6, nome: "Rafael Waltrick", cargo:"Scrum Master", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            // { id: 18, pid: 17, nome: "Lucas Braz", cargo:"Scrum Master", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            // { id: 19, pid: 17, nome: "Rafael", cargo:"Ex-Scrum Master", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            //Frontend
                            { id: 13, pid: 7, nome: "Chico Bento", cargo:"Dev FrontEnd Jr", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            // { id: 21, pid: 20, nome: "Senhorzinho Malta", cargo:"Fazendeiro", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                            // { id: 22, pid: 20, nome: "Chico Bento", cargo:"Caseiro", img: "https://cdn.balkan.app/shared/empty-img-white.svg" }
                            //Frontend
                            { id: 14, pid: 8, nome: "Carlos do Marea", cargo:"Técnico T.I", img: "https://cdn.balkan.app/shared/empty-img-white.svg" },
                        ]} />
                    </div>
                );
            }
        }