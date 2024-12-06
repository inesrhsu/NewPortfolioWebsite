import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';

const SunMoonLakeTale = () => {

  const projectPhotos = [
    {id:1, src:"/media/SunMoonLakePhoto2.png", alt:"Photograph of the Sun Moon Lake Tale project"},
    {id:2, src:'/media/SunMoonLakePhoto3.png', alt:"Photograph of the Sun Moon Lake Tale project"},
    {id:3, src:'/media/SunMoonLakePhoto4.png', alt:"Photograph of the Sun Moon Lake Tale project"},
    {id:4, src:'/media/SunMoonLakePhoto5.png', alt:"Photograph of the Sun Moon Lake Tale project"},
  ];

  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Sun Moon Lake Tale
      </div>
      <img className="project-photo1" src="/media/SunMoonLakePhoto1.png" alt="Photograph of the Sun Moon Lake Tale project"></img>
      <div className="projectdescription">
        This is a 3D environent and game in-progress based on the Taiwanese folk tale 
        titled 'Sun Moon Lake Tale' about one of the most visited and beautiful 
        lakes in the island. I also obtained inspiration from Taiwanese 'Budaixi' 
        glove puppetry tradition. I created this project using Maya and 
        Unreal Engine 4.
        <br /><br />
      </div>
      <div className="projectsubtitle" style={{fontSize:23, paddingBottom:10}}>
      View more images:
      </div>
      <ImageGallery images={projectPhotos}/>
      <div className="footer"/> 
      <Footer/>  
    </section>
    
  );
}

export default SunMoonLakeTale;
