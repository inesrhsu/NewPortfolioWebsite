import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";
import {ReactP5Wrapper} from "@p5-wrapper/react";
import StellarDrawingToolSketch from "./StellarDrawingToolp5js";
import Footer from '../components/Footer';

const StellarDrawingTool = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Stellar Drawing Tool
      </div>
      <div className="projectdescription">
        Interactive tool to create stellar (space inspired) art pieces.
        <br /><br />
        How to use the drawing tool:
        <br /><br />
        Press 1 for outward spirals when the mouse is clicked
        <br />
        Press 2 for rotating lines when the mouse is clicked
        <br />
        Press 3 for diamonds when the mouse is clicked and trail of small diamonds 
        when the mouse is dragged.
        <br />
        Press 'SPACE TAB' to restart.
        <br /><br />
      </div>
      <div className="clickhere">
          MAKE A STELLAR DRAWING!<br />
      </div>
      <div className="project-photo1"> 
        <ReactP5Wrapper className="project-photo1" sketch = {StellarDrawingToolSketch}/>
      </div>
      <div className="footer"/>
      <Footer/>
    </section>
    
  );
}

export default StellarDrawingTool;


