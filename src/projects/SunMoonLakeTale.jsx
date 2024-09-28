import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";

const SunMoonLakeTale = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Sun Moon Lake Tale
      </div>
      <img className="project-photo1" src="/media/SunMoonLakePhoto1.png" alt="Photograph of the Sun Moon Lake Tale project"></img>
      <div className="projectdescription">
        This is a 3D environent and game in-progress based on the Taiwanese folk tale 
        titled 'Sun Moon Lake Tale' about one of the most visited and beautiful 
        lakes in the island. I also obtained inspiration from Taiwanese 'Budaixi' 
        glove puppetry tradition. I created this project using Maya and 
        Unreal Engine 4.
        <br /><br />
      </div>
      <div className="projectsubtitle" style={{fontSize:23, paddingBottom:10}}>
      View more images:
      </div>
      <img className="project-photo1" src="/media/SunMoonLakePhoto2.png" alt="Photograph of the Sun Moon Lake Tale project"></img>
      <div><br /></div>
      <div className="project-photogrid">
        <img className="project-allphotos" src='/media/SunMoonLakePhoto3.png' alt="Photograph of my Coral installation"></img>
        <img className="project-allphotos" src='/media/SunMoonLakePhoto4.png' alt="Photograph of my Coral installation"></img>
      </div>
      <div className="footer"/>   
    </section>
    
  );
}

export default SunMoonLakeTale;
