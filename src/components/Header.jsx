import React from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return(
    <div>
        <header className = "Header bg-dark">
            <nav className="navbar navbar-expand-md bg-dark fixed-top">
                <div className="container ">
                    <a className="navbar-brand text-uppercase fw-bold" href="accueil">
                        <span className="p-1 text-light">John Doe</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" 
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className ="navbar-nav text-uppercase">
                            <li className="nav-item">
                                <NavLink activeClassName="nav-link" className="nav-link text-light" to="/accueil">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/realisations">Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/mentions">Mentions Légales</NavLink>
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