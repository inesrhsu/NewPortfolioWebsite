import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";
import Footer from '../components/Footer';

const PersonalWebsite = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Personal Website
      </div>
      <img className="project-photo1" src="/media/website.png" alt="Personal website image"></img>
      <div className="projectdescription">
        I developed this website using React.js, React Three Fiber, p5.js and CSS.
        <br /><br />
      </div>
      <div className="footer"/>    
      <Footer/>
    </section>
    
  );
}

export default PersonalWebsite;
