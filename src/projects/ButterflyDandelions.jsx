import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";
import {ReactP5Wrapper} from "@p5-wrapper/react";
import ButterflyDandelionsSketch from "./ButterflyDandelionsp5js";
import Footer from '../components/Footer';

const ButterflyDandelions = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Butterfly Dandelions
      </div>
      <div className="projectdescription">
        Interactive pattern creator:
        <br /><br />
        This piece generates a new abstract pattern with every time the mouse is pressed with
         variations in the figures and their angles of rotation.
        <br />
        Click on the pattern below to generate new patterns.
        
      </div>
      <div className="clickhere">
          CLICK ON THE PATTERN!<br />
          </div>
          
      
      <div className="project-photo1"> 
        <ReactP5Wrapper className="project-photo1" sketch = {ButterflyDandelionsSketch}/>
      </div>
      <div className="footer"/>
      <Footer/>
    </section>
    
  );
}

export default ButterflyDandelions;
