import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

const Accueil = () => {
    return(
        <main className="mt-4 mb-5">
            <div class="hero text-light d-flex flex-column justify-content-center align-items-center">
                    <h1 class="title-hero mt-4">Bonjour je suis John Doe</h1>
                    <h2>Dévelopeur Web full-stack</h2>
                    <Link to="../components/Modale.jsx" target="_blank" class="btn btn-danger">En savoir plus</Link>
            </div>

            <div class="container">
                <div class="row-cols-1 row row-cols-md-2 mt-5 mb-5 shadow rounded-3">
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
                    
                    {/* Case de droite --> PROBLEME PROGRESS BAR N ACCEPTE PAS LES VALEURS EN POURCENTAGE*/}
                    <div class="col pt-4 pe-4">
                        <h3 class="border-bottom border-primary border-3 pb-2">Mes compétences</h3>
                        <h4 class="pt-4">HTML5 90%</h4>
                        <div class="progress">   
                            <div class="progress-bar bg-danger" role="progressbar" aria-label="Success example" /*style={{width: 90%}}*/ aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 class="pt-3">CCS3 80%</h4>
                        <div class="progress">
                            <div class="progress-bar bg-info" role="progressbar" aria-label="Info example"  /*style={{width: 80%}}*/ aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 class="pt-3">JAVASCRIPT 70%</h4>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" aria-label="Warning example" /*style={{width: 70%}}*/ aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 class="pt-3">PHP 60%</h4>
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" aria-label="Danger example" /*style={{width: 60%}}*/ aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 class="pt-3">REACT 50%</h4>
                        <div class="progress">
                            <div class="progress-bar bg-primary" role="progressbar" aria-label="Danger example" /*style={{width: 50%}}*/ aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Accueil;