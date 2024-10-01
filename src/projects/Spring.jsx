import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";

const Spring = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Spring
      </div>
      <video className="project-photo1" autoPlay loop muted controls preload="auto">
        <source src="https://dy4k3ny7v09me.cloudfront.net/spring.mp4" type="video/mp4" />
        Your browser does not support the video tag. 
        This video shows the Spring Animation.
      </video>
      <div className="projectdescription">
      Animation for Beethoven's Violin. Sonata No.5, Op. 24 Movement I. Allegro
      'Spring'. The music used was an <a href='https://www.youtube.com/watch?v=PGFs7n6n3-8'>interpretation</a> played 
      by Anne Sophie Mutter.
      <br /><br />
      </div>
      <div className="footer"/>  
    </section>
    
  );
}

export default Spring;
