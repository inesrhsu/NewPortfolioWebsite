import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";

const Coral = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Coral
      </div>
      <img className="project-photo1" src='/media/coralIcon.png' alt="Photograph of my Coral installation"></img>
      <div className="projectdescription">
        My Coral world. I sewed these culptures with fabric, 
        hand-dyed them and brought them to life with colorful crayon patterns. 
        I sewed smalled coral from fun patterned fabric. My coral are stuffed 
        soft stuffing, and are not fixed to any position. Viewers are encouraged
        to touch them and play with them lightly.
        Parts of the coral's dyed color is fading and their colorful patterns are only left on some 
        fragments of them, evoking the reality of the beautiful colors leaving 
        coral in our oceans due to coral bleaching.
        <br /><br />
        This installation was exhibited at Carnegie Mellon University's 
        School of Art 2024 Senior Show titled <a href='https://miller-ica.cmu.edu/exhibitions/cmu-senior-art-exhibit-2024'>'Resonance'</a> 
        at the Miller Institute for Contemporary Art.  
        <br /><br />
      </div>
      <div className="project-photogrid">
        <img className="project-allphotos" src='/media/coralphoto2.png' alt="Photograph of my Coral installation"></img>
        <img className="project-allphotos" src='/media/meInCoral2.png' alt="Photograph of me with my Coral installation"></img>
      </div>

      <div className="projectsubtitle">
        Coral Inflatables:
      </div>
      <div className="projectdescription">
        An earlier iteration of my coral was 'Breathing coral' consisting 
        of coral inflatables, with which I explored the coral having a breathing
        motion with the inflating and deflating of the coral.
        <br /><br />
      </div>
      <video className="project-photo1" autoPlay loop muted controls preload="auto" poster="/media/CoralInflatablesPhoto.png">
        <source src="https://dy4k3ny7v09me.cloudfront.net/coralInflatables.mp4" type="video/mp4" />
        Your browser does not support the video tag. 
        This video shows the Coral Inflatables installation.
      </video>
      <div>
        <br /><br />
      </div>
      <div className="footer"/>  
    </section>
    
  );
}

export default Coral;
