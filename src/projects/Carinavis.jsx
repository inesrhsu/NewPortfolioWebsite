import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";


const Carinavis = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Carinavis
      </div>
      {/* <img className="project-photo1" src='/media/carinavisPhoto.png' alt="Image of Carinavis Carina Temple Ruins"></img> */}
      <div className="projectdescription">
        Carinavis is a project that tells the story of a future astrological cult 
        in a far away planetary system, whose followers worship the star Eta Carinae
        and interact with each other silently through their minds. Brain chips 
        connect them spiritually to each other and they gather in temples virtually 
        through virtual reality visors. The Carinivs vanish mysteriously after the
        supernova explosion of the Eta Carinae star, leaving behind remains of stone 
        temples built on asteroids.
        <br /><br />
        The following is the script of an astroarcheologist, recounting the findings
        of this future, dystopian, vanished civilization. Along with it are 3D models 
        of remains of the stone temples made after stars the Carinivs worshipped, an 
        image of a reconstruction of their clothing and evidence of their existence.
        <br /><br />  
      </div>
      <div className="project-photogrid">
        <img className="project-allphotos" src='/media/carinavisTemple1.png' alt="Image of Carinavis Carina Temple Ruins"></img>
        <img className="project-allphotos" src='/media/carinavisTemple2.png' alt="Image of Carinavis Cassiopeia Temple Ruins"></img>
        <img className="project-allphotos" src='/media/carinavisTemple3.png' alt="Image of Carinavis Canis Major Temple Ruins"></img>
        <img className="project-allphotos" src='/media/carinavisTemple4.png' alt="Image of Carinavis Cygnus Temple Ruins"></img>
        <img className="project-allphotos" src='/media/carinavisTemple5.png' alt="Image of Carinavis Aquila Temple Ruins"></img>
        <img className="project-allphotos" src='/media/carinavisTemple6.png' alt="Image of Carinavis Lyra Temple Ruins"></img>
        <img className="project-allphotos" src='/media/carinavisTemple7.png' alt="Image of Carinavis Taurus Temple Ruins"></img>
        <img className="project-allphotos" src='/media/carinavisClothing.png' alt="Image of Carinavis Clothing"></img>
        <img className="project-allphotos" src='/media/carinavisEvidence.png' alt="Image of Carinavis Found Evidence"></img>
      </div>
      <div>
      <br /> 
      </div>
      <div className="project-photogrid">
        <img className="project-allphotos" src='/media/carinavisText1.png' alt="Carinavis Text 1"></img>
        <img className="project-allphotos" src='/media/carinavisText2.png' alt="Carinavis Text 2"></img>
      </div>
      <div className="footer"/>
    </section>
    
  );
}

export default Carinavis;