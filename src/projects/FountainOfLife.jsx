import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';

const FountainOfLife = () => {

  const projectPhotos = [
    {id:1, src:'/media/FountainOfLifePhoto1.png', alt:"Screenshot from Fountain of Life 3D Animation"},
    {id:2, src:'/media/FountainOfLifePhoto2.png', alt:"Screenshot from Fountain of Life 3D Animation"},
  ];

  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Fountain of Life
      </div>
      <video className="project-photo1" autoPlay loop muted controls preload="auto" playsInline webkit-playsinline="true" poster="/media/FountainOfLifePhoto1.png">
        <source src="https://dy4k3ny7v09me.cloudfront.net/FountainOfLifeVid.mp4" type="video/mp4" />
        Your browser does not support the video tag. 
        This video shows the Fountain of Life 3D animation.
      </video>
      <div className="projectdescription">
      This piece is a coded animation created using Unity. I thought about 
        the souls in life that built all of nature. I used spirals as a way in 
        which these souls came together and kept all the nature alive. I used 
        mathematical expressions in my code to generate all the spirals and 
        shapes created in my animation. I was vaguely inspired by the Singapore 
        Supertree Grove light show. 
        <br /><br />
      </div>
      <div className="projectsubtitle" style={{fontSize:23, paddingBottom:10}}>
      View images:
      </div>
      <ImageGallery images={projectPhotos}/>
      <div className="footer"/>   
      <Footer/>
    </section>
    
  );
}

export default FountainOfLife;
