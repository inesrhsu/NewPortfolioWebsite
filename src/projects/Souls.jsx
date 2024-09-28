import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";

const Souls = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Souls
      </div>
      <video className="project-photo1" src="/media/souls.mp4" alt="Souls Animation" autoPlay loop></video>
      <div className="projectdescription">
        Abstract animation inspired by what I imagined our souls would be and 
        act like throughout our lives. I created this animation using Adobe <a href="https://www.adobe.com/products/aftereffects.html">
        After Effects</a>.
        <br /><br />
      </div>
      <div className="projectsubtitle" style={{fontSize:23, paddingBottom:10}}>
      View snapshots:
      </div>
      <div className="project-photogrid">
        <img className="project-allphotos" src='/media/SoulsPhoto5.png' alt="Screenshot from Souls animation"></img>
        <img className="project-allphotos" src='/media/SoulsPhoto2.png' alt="Screenshot from Souls animation"></img>
        <img className="project-allphotos" src='/media/SoulsPhoto3.png' alt="Screenshot from Souls animation"></img>
        <img className="project-allphotos" src='/media/SoulsPhoto4.png' alt="Screenshot from Souls animation"></img>
      </div>
      <div className="footer"/>   
    </section>
    
  );
}

export default Souls;
