import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";
import {ReactP5Wrapper} from "@p5-wrapper/react";
import StellarDrawingToolSketch from "./StellarDrawingToolp5js";
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';


const StellarDrawingTool = () => {

  const projectPhotos=[
    {id:1, src:'/media/stellarToolPhoto1.png', alt:"Drawing created using Stellar Drawing Tool"},
    {id:2, src:'/media/stellarToolPhoto2.png', alt:"Drawing created using Stellar Drawing Tool"},
    {id:3, src:'/media/stellarToolPhoto3.png', alt:"Drawing created using Stellar Drawing Tool"},
    {id:4, src:'/media/stellarToolPhoto4.png', alt:"Drawing created using Stellar Drawing Tool"},
    {id:5, src:'/media/stellarToolPhoto5.png', alt:"Drawing created using Stellar Drawing Tool"},
    {id:6, src:'/media/stellarToolPhoto6.png', alt:"Drawing created using Stellar Drawing Tool"},
    {id:7, src:'/media/stellarToolPhoto7.png', alt:"Drawing created using Stellar Drawing Tool"},
    {id:8, src:'/media/stellarToolPhoto8.png', alt:"Drawing created using Stellar Drawing Tool"},
  ];

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
      <div className="projectsubtitle" style={{fontSize:23, paddingBottom:10}}>
      View examples:
      </div>
      <ImageGallery images={projectPhotos}/>
      <div className="footer"/>
      <Footer/>
    </section>
    
  );
}

export default StellarDrawingTool;


