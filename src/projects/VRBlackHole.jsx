import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";

const VRBlackHole = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div>
        <br /><br /><br />
      </div>
      <div className="projectsubtitle">
      Falling through the Universe into a Black Hole: A VR Experience
      </div>
      <video className="project-photo1" src="src/projects/vrBlackHole.mp4" alt="Video of my Falling through the Universe into a Black Hole VR experience" autoPlay loop muted></video>
      <div className="projectdescription">
      VR experience where the viewer falls through the early universe into a 
        black hole. The experience simulates general relativistic physics effects 
        as one approaches a black hole. Made using Unity, using computational 
        techniques for real-time performance. I presented my research and process at 
        Carnegie Mellon University's 2024 <a href='https://www.cmu.edu/uro/MoM/'>Meeting of the Minds</a>.
        <br /><br />
        Made with mentorship from Professor Rupert Croft (Carnegie Mellon 
        University) and Yihao Zhou.
        <br /><br />
      </div>
      <div className="footer"/>   
    </section>
    
  );
}

export default VRBlackHole;
