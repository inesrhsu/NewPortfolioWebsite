import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";

const SeaCave = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Sea Cave
      </div>
      <img className="project-photo1" src="src/projects/seaCaveIcon.png" alt="Photograph of me with my Coral installation"></img>
      <div className="projectdescription">
      Lithograph print. 
        <br /><br />
      </div>
      <div className="footer"/>
    </section>
    
  );
}

export default SeaCave;
