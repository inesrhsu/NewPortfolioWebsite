import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";
import Footer from '../components/Footer';

const Angel = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Angel
      </div>
      <img className="project-photo1" src="/media/angelIcon.png" alt="Angel print"></img>
      <div className="projectdescription">
        Intaglio and aquatint etching print. 
        <br /><br />
      </div>
      <div className="footer"/>    
      <Footer/>
    </section>
    
  );
}

export default Angel;
