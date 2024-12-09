import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";
import Footer from '../components/Footer';

const Winter = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Winter
      </div>
      <img className="project-photo1" src="/media/winterIcon.png" alt="Winter Color Woodblock Print"></img>
      <div className="projectdescription">
        Series of B&W and color woodblock prints depicting a winter forest in Finland.  
        <br /><br />
      </div>
      <div className="projectsubtitle" style={{fontSize:23, paddingBottom:10}}>
      View prints:
      </div>
      <div className="project-photogrid">
        <img className="project-allphotos" src='/media/WinterPhoto1.png' alt="Winter Color Woodblock Print 1"></img>
        <img className="project-allphotos" src='/media/WinterPhoto2.png' alt="Winter Color Woodblock Print 2"></img>
        <img className="project-allphotos" src='/media/WinterPhoto3.png' alt="Winter Color Woodblock Print 3"></img>
        <img className="project-allphotos" src='/media/WinterPhoto4.png' alt="Winter Color Woodblock Print 4"></img>
        <img className="project-allphotos" src='/media/WinterPhoto5.png' alt="Winter Color Woodblock Print 5"></img>
        <img className="project-allphotos" src='/media/WinterPhoto6.png' alt="Winter Color Woodblock Print 6"></img>
        <img className="project-allphotos" src='/media/WinterPhoto7.png' alt="Winter Color Woodblock Print 7"></img>
        <img className="project-allphotos" src='/media/WinterPhoto8.png' alt="Winter Color Woodblock Print 8"></img>
      </div>
      <img className="project-photo1" src="/media/WinterPhotoBW.png" alt="Winter B&W Woodblock Print" style={{paddingTop:25}}></img>
      <div className="footer"/> 
      <Footer/>
    </section>
    
  );
}

export default Winter;
