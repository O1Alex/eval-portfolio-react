import React from "react";

const Realisations = () => {
    return(
        <main className="mt-4 mb-5">
            <div class="portfolio d-flex flex-column justify-content-center align-items-center">
                <img src="/banner.jpg" alt="baniere"/>
                <h1 className="mt-5">Portfolio</h1>
                <p class="description-element mb-0">Voici quelques-unes de mes réalisations</p>
            </div>

            <div class="divider mb-5"></div>

            <div class="container">
                <div class="row row-cols-1 row-cols-md-3 g-3">
                    <div class="col">
                        <div class="card">
                            <img src="/fresh-food.jpg" class="card-img-portfolio" alt="produits frais"/>
                            <div class="card-body d-flex column flex-column align-items-center">
                                <h5 class="card-title">Fresh Food</h5>
                                <p class="card-text">Site de vente de produits frais en ligne</p>
                                <a href="#" class="button-portfolio btn btn-primary ">Fermer</a>
                            </div>
                            <div class="card-footer d-flex column flex-column align-items-center bg-secondary-50 pb-0">
                                <p class="">Site réalisé avec PHP et MySQL</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="/restaurant-japonais.jpg" class="card-img-portfolio" alt="Restaurant japonais"/>
                            <div class="card-body d-flex column flex-column align-items-center">
                                <h5 class="card-title">Restaurant Akira</h5>
                                <p class="card-text">Site de vente de produits frais en ligne</p>
                                <a href="#" class="button-portfolio btn btn-primary ">Fermer</a>
                            </div>
                            <div class="card-footer d-flex column flex-column align-items-center bg-secondary-50 pb-0">
                                <p class="">Site réalisé avec WordPress</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="espace-bien-etre.jpg" class="card-img-portfolio" alt="Bien être"/>
                            <div class="card-body d-flex column flex-column align-items-center">
                                <h5 class="card-title">Espace bien-être</h5>
                                <p class="card-text">Site de vente de produits bien-être en ligne</p>
                                <a href="#" class="button-portfolio btn btn-primary ">Fermer</a>
                            </div>
                            <div class="card-footer d-flex column flex-column align-items-center bg-secondary-50 pb-0">
                                <p class="">Site réalisé avec LARAVEL</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="seo.jpg" class="card-img-portfolio" alt="SEO"/>
                            <div class="card-body d-flex column flex-column align-items-center">
                                <h5 class="card-title">SEO</h5>
                                <p class="card-text">Amélioration du référencement d'un site e-commerce</p>
                                <a href="#" class="button-portfolio btn btn-primary ">Fermer</a>
                            </div>
                            <div class="card-footer d-flex column flex-column align-items-center bg-secondary-50 pb-0">
                                <p class="">Utilisation des outils SEO</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="coder.jpg" class="card-img-portfolio" alt="code informatique"/>
                            <div class="card-body d-flex column flex-column align-items-center">
                                <h5 class="card-title">Création d'une API</h5>
                                <p class="card-text">Création d'une API RESTFULL publique</p>
                                <a href="#" class="button-portfolio btn btn-primary ">Fermer</a>
                            </div>
                            <div class="card-footer d-flex column flex-column align-items-center bg-secondary-50 pb-0">
                                <p class="">PHP-SYMFONY</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="screens.jpg" class="card-img-portfolio" alt="site Web"/>
                            <div class="card-body d-flex column flex-column align-items-center">
                                <h5 class="card-title">Maquete d'un site web</h5>
                                <p class="card-text">Création du prototype d'un site</p>
                                <a href="#" class="button-portfolio btn btn-primary ">Fermer</a>
                            </div>
                            <div class="card-footer d-flex column flex-column align-items-center bg-secondary-50 pb-0">
                                <p class="d">Réalisé avec FIGMA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default Realisations;