import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';

const StoneNightmare = () => {
  const projectPhotos =[
    {id:1, src:'/media/StoneNightmarePhoto1.png',  alt:"Screenshot from The Stone Nightmare Bitsy game"},
    {id:2, src:'/media/StoneNightmarePhoto2.png',  alt:"Screenshot from The Stone Nightmare Bitsy game"},
    {id:3, src:'/media/StoneNightmarePhoto3.png',  alt:"Screenshot from The Stone Nightmare Bitsy game"},
    {id:4, src:'/media/StoneNightmarePhoto4.png',  alt:"Screenshot from The Stone Nightmare Bitsy game"},
    {id:5, src:'/media/StoneNightmarePhoto5.png',  alt:"Screenshot from The Stone Nightmare Bitsy game"},
    {id:6, src:'/media/StoneNightmarePhoto6.png',  alt:"Screenshot from The Stone Nightmare Bitsy game"},
    {id:7, src:'/media/StoneNightmarePhoto7.png',  alt:"Screenshot from The Stone Nightmare Bitsy game"},
    {id:8, src:'/media/StoneNightmarePhoto8.png',  alt:"Screenshot from The Stone Nightmare Bitsy game"},
    {id:9, src:'/media/StoneNightmarePhoto9.png',  alt:"Screenshot from The Stone Nightmare Bitsy game"},
    {id:10, src:'/media/StoneNightmarePhoto10.png', alt:"Screenshot from The Stone Nightmare Bitsy game"},
  ];

  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Stone Nightmare
      </div>
      <video className="project-photo1" autoPlay loop muted controls preload="auto" playsInline webkit-playsinline="true" poster="/media/StoneNightmarePhoto1.png">
        <source src="https://dy4k3ny7v09me.cloudfront.net/TheStoneNightmareVid.mp4" type="video/mp4" />
        Your browser does not support the video tag. 
        This video shows the video of The Stone Nightmare Bitsy game.
      </video>
      <div className="projectdescription">
        A Bitsy game inspired by one of my nightmares. In the game the main 
        character's sister has been turned into stone and the player has to go 
        pass through a maze to get to the underworld to retrieve parts of her 
        and bring her back to life.
        <br /><br />
      </div>
      <div className="projectsubtitle" style={{fontSize:23, paddingBottom:10}}>
      View snapshots:
      </div>
      <ImageGallery images={projectPhotos}/>
      <div className="footer"/>   
      <Footer/>
    </section>
    
  );
}

export default StoneNightmare;
