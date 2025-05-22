import React from "react";
import {Link} from 'react-router-dom'

import "./header.css";

const Header = () => {
    return(
    <div>
        <header className = "Header bg-dark">
            <nav className="navbar navbar-expand-md bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand text-uppercase fw-bold" href="/index.html">
                        <span className="p-1 text-light">John Doe</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" 
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className ="navbar-nav text-uppercase">
                            <li className="nav-item">
                                <a className="nav-link" href="/accueil">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/realisations">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/mentions">Mentions Légales</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>
    )
}

export default Header;