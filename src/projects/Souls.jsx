import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';


const Souls = () => {

  const snapshots = [
    {id:1, src:'/media/SoulsPhoto5.png', alt:"Screenshot from Souls animation"},
    {id:2, src:'/media/SoulsPhoto2.png', alt:"Screenshot from Souls animation"},
    {id:3, src:'/media/SoulsPhoto3.png', alt:"Screenshot from Souls animation"},
    {id:4, src:'/media/SoulsPhoto4.png', alt:"Screenshot from Souls animation"},
  ];

  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Souls
      </div>
      <video className="project-photo1" autoPlay loop muted controls preload="auto" playsInline webkit-playsinline="true" poster="/media/SoulsPhoto2.png">
        <source src="https://dy4k3ny7v09me.cloudfront.net/souls.mp4" type="video/mp4" />
        Your browser does not support the video tag. 
        This video shows the Souls Animation.
      </video>
      <div className="projectdescription">
        Abstract animation inspired by what I imagined our souls would be and 
        act like throughout our lives. I created this animation using Adobe <a href="https://www.adobe.com/products/aftereffects.html">
        After Effects</a>.
        <br /><br />
      </div>
      <div className="projectsubtitle" style={{fontSize:23, paddingBottom:10}}>
      View snapshots:
      </div>
      
      <ImageGallery images={snapshots}/>
      <div className="footer"/>   
      <Footer/>
    </section>
    
  );
}

export default Souls;
