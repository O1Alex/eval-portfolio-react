import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";
import Realisations from "./pages/Realisations";
import Services from "./pages/Services";
import Layout from "./pages/Layout"

export default function App(){
  return(
    <div className="App">
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/mentions">Mentions</Link>
        <Link to="/realisations">Realisations</Link>
        <Link to="/services">Services</Link>
      </nav>

      <Routes>
        <Route element={<Layout/>}> 
          <Route index element={<Accueil/>}/>
          <Route path="/accueil" element={<Accueil/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/mentions" element={<Mentions/>}></Route>
          <Route path="/realisations" element={<Realisations/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}