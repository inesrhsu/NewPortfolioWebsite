import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";

const AIAliens = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        AIAliens
      </div>
      <div className="project-photogrid">
      <video className="project-allphotos" autoPlay loop muted controls preload="auto" playsinline webkit-playsinline poster="/media/BlueAlienPhoto.png">
        <source src="/media/blueAlienVid.mp4" type="video/mp4" />
        Your browser does not support the video tag. 
        This video shows an animation of a blue AIAlien.
      </video>
      <video className="project-allphotos" autoPlay loop muted controls preload="auto" playsinline webkit-playsinline poster="/media/BlueBlobAlienPhoto.png">
        <source src="/media/blueBlobAlienVid.mp4" type="video/mp4" />
        Your browser does not support the video tag. 
        This video shows an animation of a blue AIAlien.
      </video>
      <video className="project-allphotos" autoPlay loop muted controls preload="auto" playsinline webkit-playsinline poster="/media/FluidAlienPhoto.png">
        <source src="/media/fluidAlienVid.mp4" type="video/mp4" />
        Your browser does not support the video tag. 
        This video shows an animation of a fluid AIAlien.
      </video>
      <video className="project-allphotos" autoPlay loop muted controls preload="auto" playsinline webkit-playsinline poster="/media/SkyAlienPhoto.png">
        <source src="/media/skyAlienVid.mp4" type="video/mp4" />
        Your browser does not support the video tag. 
        This video shows an animation of a sky AIAlien.
      </video>
      <video className="project-allphotos" autoPlay loop muted controls preload="auto" playsinline webkit-playsinline poster="/media/GreyAlienPhoto.png">
        <source src="/media/greyAlienVid.mp4" type="video/mp4" />
        Your browser does not support the video tag. 
        This video shows an animation of a grey AIAlien.
      </video>
      <video className="project-allphotos" autoPlay loop muted controls preload="auto" playsinline webkit-playsinline poster="/media/GreenAlienPhoto.png">
        <source src="/media/greenAlienVid.mp4" type="video/mp4" />
        Your browser does not support the video tag. 
        This video shows an animation of a green AIAlien.
      </video>
      <video className="project-allphotos" autoPlay loop muted controls preload="auto" playsinline webkit-playsinline poster="/media/RedAlienPhoto.png">
        <source src="/media/redAlienVid.mp4" type="video/mp4" />
        Your browser does not support the video tag. 
        This video shows an animation of a red AIAlien.
      </video>
      <video className="project-allphotos" autoPlay loop muted controls preload="auto" playsinline webkit-playsinline poster="/media/ColorfulAlienPhoto.png">
        <source src="/media/colorfulAlienVid.mp4" type="video/mp4" />
        Your browser does not support the video tag. 
        This video shows an animation of a colorful AIAlien.
      </video>
      <video className="project-allphotos" autoPlay loop muted controls preload="auto" playsinline webkit-playsinline poster="/media/PurpleAlienPhoto.png">
        <source src="/media/purpleAlienVid.mp4" type="video/mp4" />
        Your browser does not support the video tag. 
        This video shows an animation of a purple AIAlien.
      </video>
      <video className="project-allphotos" autoPlay loop muted controls preload="auto" playsinline webkit-playsinline poster="/media/PurpleAlienPhoto2.png">
        <source src="/media/purpleAlienVid2.mp4" type="video/mp4" />
        Your browser does not support the video tag. 
        This video shows an animation of a purple AIAlien.
      </video>

        
      
        <video className="project-allphotos" src='/media/greenAlienVid.mp4' alt="Animation of a gree AI Alien" autoPlay loop></video>
        <video className="project-allphotos" src='/media/redAlienVid.mp4' alt="Animation of a red AI Alien" autoPlay loop></video>
        <video className="project-allphotos" src='/media/colorfulAlienVid.mp4' alt="Animation of a colorful AI Alien" autoPlay loop></video>
        <video className="project-allphotos" src='/media/purpleAlienVid.mp4' alt="Animation of a purple AI Alien" autoPlay loop></video>
        <video className="project-allphotos" src='/media/purpleAlienVid2.mp4' alt="Animation of a purple AI Alien" autoPlay loop></video>
      </div>
      <div className="projectdescription">
      I use an artificial intelligence bot ('Midjourney') to obtain 
        images of what an AI thinks life forms would look like and in what type 
        of world they would live in with prompt words like “life form” and color 
        words. This was inspired by a previous project <NavLink to="/year2235">Year2235</NavLink> in 
        which I envision what footage captured of several alien life 
        forms would look like. I attempt to break from the media stereotypes of 
        alien life as well as preconceptions taken from life forms Earth. I wanted 
        artificial intelligence to give me some ideas, which at the same time could 
        be more objective yet are also based on everything that we humans conceive
        life forms to look like in the internet and media.
        <br /><br />
        For each alien life form I use a picture generated by AI, modify it and 
        create a 3D model with it, then and animate it to give it life.
        <br /><br />
      </div>
      <div className="footer"/>  
    </section>
    
  );
}

export default AIAliens;
