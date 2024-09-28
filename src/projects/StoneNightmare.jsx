import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";

const StoneNightmare = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Stone Nightmare
      </div>
      <video className="project-photo1" src="/media/TheStoneNightmareVid.mp4" alt="Video of The Stone Nightmare Bitsy game" autoPlay loop muted></video>
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
      <div className="project-photogrid">
        <img className="project-allphotos" src='/media/StoneNightmarePhoto1.png' alt="Screenshot from The Stone Nightmare Bitsy game"></img>
        <img className="project-allphotos" src='/media/StoneNightmarePhoto2.png' alt="Screenshot from The Stone Nightmare Bitsy game"></img>
        <img className="project-allphotos" src='/media/StoneNightmarePhoto3.png' alt="Screenshot from The Stone Nightmare Bitsy game"></img>
        <img className="project-allphotos" src='/media/StoneNightmarePhoto4.png' alt="Screenshot from The Stone Nightmare Bitsy game"></img>
        <img className="project-allphotos" src='/media/StoneNightmarePhoto5.png' alt="Screenshot from The Stone Nightmare Bitsy game"></img>
        <img className="project-allphotos" src='/media/StoneNightmarePhoto6.png' alt="Screenshot from The Stone Nightmare Bitsy game"></img>
        <img className="project-allphotos" src='/media/StoneNightmarePhoto7.png' alt="Screenshot from The Stone Nightmare Bitsy game"></img>
        <img className="project-allphotos" src='/media/StoneNightmarePhoto8.png' alt="Screenshot from The Stone Nightmare Bitsy game"></img>
        <img className="project-allphotos" src='/media/StoneNightmarePhoto9.png' alt="Screenshot from The Stone Nightmare Bitsy game"></img>
        <img className="project-allphotos" src='/media/StoneNightmarePhoto10.png' alt="Screenshot from The Stone Nightmare Bitsy game"></img>
      </div>
      <div className="footer"/>   
    </section>
    
  );
}

export default StoneNightmare;
