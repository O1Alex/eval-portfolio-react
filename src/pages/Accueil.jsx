import React from "react";
import '../App.css'
import Modal from "../components/Modal";
import { useState } from "react";

const Accueil = () => {
    const [openModal, setOpenModal] = useState(false)
    return(
        <main className="mb-5">
            <div className="Modal hero text-light d-flex flex-column align-items-center justify-content-center mb-5 ">
                <h1 class="title-hero mt-">Bonjour je suis John Doe</h1>
                <h2>Dévelopeur Web full-stack</h2> 

                {/* Bouton Modal */}
                <button className="openModalBtn bg-danger text-light rounded-3 p-2 ps-4 pe-4"
                onClick={() =>{
                    setOpenModal(true);
                } }
                >
                    En savoir plus
                </button>
                {openModal && <Modal closeModal={setOpenModal}/>}
            </div>

            <div class="container">
                <div class="row-cols-1 row row-cols-md-2 mt-5 mb-5 shadow rounded-2">
                    {/* Case de gauche */}
                    <div class="col pt-4 ps-4">
                        <h3 class="border-bottom border-primary border-3 pb-2 pl-4">A propos</h3>
                        <img src="/john-doe-about.jpg" alt="Image John Doe" class="pt-4 pl-4 mb-2"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at dignissim enim. In convallis urna mi. 
                            Duis arcu augue, posuere sed mauris pharetra, feugiat maximus nisi. Nunc nisl neque, lacinia ac consectetur vitae, elementum a dui.                        
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at dignissim enim. In convallis urna mi. 
                            Duis arcu augue, posuere sed mauris pharetra, feugiat maximus nisi. Nunc nisl neque, lacinia ac consectetur vitae, elementum a dui.                        
                        </p>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at dignissim enim. In convallis urna mi. 
                            Duis arcu augue, posuere sed mauris pharetra, feugiat maximus nisi. Nunc nisl neque, lacinia ac consectetur vitae, elementum a dui.                        
                        </p>
                    </div>
                    
                    {/* Case de droite --> PROBLEME PROGRESS BAR REACT N'ACCEPTE PAS LES VALEURS EN POURCENTAGE ET SEULE LA VALEUR 50% FAIT PARTIE DES VALEURS ACCEPTEES SOUS CETTE FORME*/}
                    <div class="col pt-4 pe-4 pb-4">
                        <h3 class="border-bottom border-primary border-3 pb-2">Mes compétences</h3>
                        <h4 class="pt-4">HTML5 90%</h4>
                        <div class="progress">   
                            <div class="progress-bar w-90 bg-danger " role="progressbar" aria-label="Amazing !" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 class="pt-3">CCS3 80%</h4>
                        <div class="progress">
                            <div class="progress-bar w-80 bg-info" role="progressbar" aria-label="You rock !"  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 class="pt-3">JAVASCRIPT 70%</h4>
                        <div class="progress">
                            <div class="progress-bar w-70 bg-warning" role="progressbar" aria-label="Keep it up !" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 class="pt-3">PHP 60%</h4>
                        <div class="progress">
                            <div class="progress-bar w-60 bg-success" role="progressbar" aria-label="The hardest part is over !" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 class="pt-3">REACT 50%</h4>
                        <div class="progress">
                            <div class="progress-bar w-50 bg-primary" role="progressbar" aria-label="Good start !"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Accueil;