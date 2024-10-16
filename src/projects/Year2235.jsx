import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";

const Year2235 = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Year 2235
      </div>
      <video className="project-photo1" autoPlay loop muted controls preload="auto" playsInline webkit-playsinline="true" poster="/media/Year2235Photo.png">
        <source src="https://dy4k3ny7v09me.cloudfront.net/year2235.mp4" type="video/mp4" />
        Your browser does not support the video tag. 
        This video shows the Year 2235 video.
      </video>
      <div className="projectdescription">
        In 'Year 2235' I envision that we are in the year 2235 and humanity has 
        acquired footage of what extraterrestrial life forms look like. I imagine 
        the different planetary systems these could be photographed in, most being 
        several light years away. Alien life could take any form unlike we observe 
        of life on Earth and I try to break with stereotypical image of how aliens 
        are portrayed on the TV and media. We could need different frequency ranges 
        to hear the sounds they may produce and diverse camera imaging techniques 
        to be able to observe them, as I envision in this video feed. 
        I created this video using Adobe Premiere Pro, video and mixed media.
        <br /><br />
        Despite my efforts to break from stereotypical media representations, 
        my imagination of alien life is still based on what I observe from reality 
        on Earth. In a different approach, I try to use AI to envision what alien
        life forms could look like. Access the project here: <NavLink to="/aIAliens">AI Aliens</NavLink>.
        <br /><br />
      </div>
      <div className="footer"/>  
    </section>
    
  );
}

export default Year2235;
