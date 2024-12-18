import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";
import Footer from '../components/Footer';

const VRBlackHole = () => {
  return (
    
    <section className="projectpage">
      <div className="projecttitle">
      Falling through the Universe into a Black Hole: A VR Experience
      </div>
      <video className="project-photo1" autoPlay loop muted controls preload="auto" playsInline webkit-playsinline="true" poster="/media/VRBHPhoto.png">
        <source src="https://dy4k3ny7v09me.cloudfront.net/vrBlackHole.mp4" type="video/mp4" />
        Your browser does not support the video tag. 
        This video shows my Falling through the Universe into a Black Hole VR experience.
      </video>
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
      <Footer/>
    </section>
    
  );
}

export default VRBlackHole;
