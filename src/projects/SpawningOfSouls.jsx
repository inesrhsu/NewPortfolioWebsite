import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";

const SpawningOfSouls = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        The Spawning of the Souls
      </div>
      <img className="project-photo1" src="src/projects/spawningOfTheSouls.png" alt="Photograph of The Spawning of the Souls project"></img>
      <div className="projectdescription">
        A 3D imaginary world which souls inhabit. Made using Unity and Blender.
        <br /><br />
      </div>
      
      <div className="footer"/>  
    </section>
    
  );
}

export default SpawningOfSouls;
