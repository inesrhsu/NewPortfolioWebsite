import React from 'react';
import Footer from '../components/Footer';
import './Pages.css'
import { NavLink } from "react-router-dom"

const About = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
        <div className="abouttitle">
          About Me
        </div>
        <div className="projectdescription">
          I am a multidisciplinary artist working at the intersection of art, 
          physics and computation, whose work spans installation, sculpture, 
          physics simulation, video and animation, computational art and 3D/VR 
          work. I am Spanish and Taiwanese, and am currently based in San 
          Francisco. I have previously lived in Barcelona, Taipei, Pittsburgh 
          and love exploring new cities. 
          <br /><br />
          I recently graduated from Carnegie Mellon University with a Bachelor 
          of Science and Arts in Physics and Art, and have previously interned 
          at <a href='https://www.teamlab.art'>teamLab</a> (Tokyo) as an <a href='https://open.talentio.com/r/1/c/teamlab/pages/50809'>interactive engineer</a>. 
          I am currently looking for opportunities in creative tech and am 
          eager to collaborate on installations, museum exhibitions, branding 
          initiatives and artistic experiences.
          <br /><br />
          </div>
          <div className="subtitle">
            Artist's statement
          </div>
          <div className="projectdescription">
          I think about the large bodies in our universe like the 
          ocean and outer space and the ecosystems that could live in them. I 
          seek to bring the far away black holes, galaxies and mysteries of the 
          world closer to us. I strive to design immersive worlds, and use 
          color, patterns and motion to create playful environments. By 
          employing interactive components I encourage the audience to 
          engage with and be part of my work. 
          <br /><br />
          </div>
        <img className="project-photo1" src="/media/MeInMyCoral.png" alt="Photograph of me with my Coral installation"></img>
        <div className="footer"/>    
        <Footer/>
    </section>
    
  );
}

export default About;
