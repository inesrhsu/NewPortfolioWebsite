import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";

const Carousel = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Carousel
      </div>
      <video className="project-photo1" autoPlay loop muted controls preload="auto" playsInline webkit-playsinline="true" poster="/media/CarouselPhoto1.png">
        <source src="https://dy4k3ny7v09me.cloudfront.net/carousel.mp4" type="video/mp4" />
        Your browser does not support the video tag. 
        This video shows the Carousel Animation.
      </video>
      <div className="projectdescription">
        Short animation inspired by a mermaid statue my family found upon moving into
        a new house. I used porcelain faces and antiques from The Metropolitan Museum of 
        Art to bring this carousel to life, as well as my own video and audio of flying 
        birds.
        <br /><br />
      </div>
      <div className="projectsubtitle" style={{fontSize:23, paddingBottom:10}}>
      View images:
      </div>
      <div className="project-photogrid">
        <img className="project-allphotos" src='/media/CarouselPhoto1.png' alt="Screenshot from Carousel Animation"></img>
        <img className="project-allphotos" src='/media/CarouselPhoto2.png' alt="Screenshot from Carousel Animation"></img>
        <img className="project-allphotos" src='/media/CarouselPhoto3.png' alt="Screenshot from Carousel Animation"></img>
        <img className="project-allphotos" src='/media/CarouselPhoto4.png' alt="Screenshot from Carousel Animation"></img>
      </div>
      <div className="footer"/>   
        
    </section>
    
  );
}

export default Carousel;
