import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";
import {ReactP5Wrapper} from "@p5-wrapper/react";
import HappyDumplingSketch from "./HappyDumplingp5js";
import HappyDumplingSketch2 from "./HappyDumplingp5js2";

const HappyDumplings = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Happy Dumplings
      </div>
      <div className="projectdescription">
      Interactive dumpling pattern creator:
      <br /><br />
        At first the piece has a stationary pattern of smiling pink dumplings. 
        <br />
        Click on the pattern to generate new dumplings with random face expressions 
        and colors.
        
      </div>
      <div className="clickhere">
          CLICK ON THE PATTERN!<br />
          </div>
          
      
      <div className="project-photo1"> 
        <ReactP5Wrapper sketch = {HappyDumplingSketch}/>
        <br />
      </div>
      <div className="project-photo1"> 
        <ReactP5Wrapper sketch = {HappyDumplingSketch2}/>
      </div>
      <div className="footer"/>
    </section>
    
  );
}

export default HappyDumplings;
