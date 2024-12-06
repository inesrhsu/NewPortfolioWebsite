import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";
import Footer from '../components/Footer';


const PhotographsForTheFuture = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Photographs for the Future
      </div>
      <img className="project-photo1" src="/media/photographsForTheFuture.png" alt="Photographs for the Future image"></img>
      <div className="projectdescription">
        Film photographs for the future. In 2022 I took film photographs in rolls of black 
        and white film. I put these rolls of film in capsules with instructions for someone,
        in the future, to take pictures using the same film. In this way, creating double 
        exposure images of two different spaces and times. Through this project I wanted to 
        use photographs to send messages into the future and create art pieces that were 
        started by me in 2022 and will be completed and enjoyed by others many years later. 
        Each photograph will intertwine my story with that of someone in the future: 
        <br /><br />
        My future child when they are 20.<br />
        A future finder of a capsule in the Year 2122.<br />
        A future human who travels to Mars once Mars is inhabited.
        <br /><br />
        Through these film capsules there will be photographs showing my life, things I cherished and
        places I visited daily together with those of my future child, when we are both the same age, 20; 
        photographs showing my life in 2022 together with that of someone living 100 years later; and photographs
        showing our life here on Earth together with life in a future habitat, Mars.
        <br /><br />
        I stored the film in black canisters, and laminated the paper instructions with plastic, and 
        placed them inside tightly closed pipe and pipe cap capsules, so that hopefully, they survive
        the pass of time.
        <br /><br />  
      </div>
      <div className="project-photogrid">
        <img className="project-allphotos" src='/media/photographsForTheFuturePhoto2.png' alt="Photographs for the Future Photo 2"></img>
        <img className="project-allphotos" src='/media/photographsForTheFuturePhoto3.png' alt="Photographs for the Future Photo 3"></img>
        <img className="project-allphotos" src='/media/photographsForTheFutureText1.png' alt="Photographs for the Future Instruction Text 1"></img>
        <img className="project-allphotos" src='/media/photographsForTheFutureText2.png' alt="Photographs for the Future Instruction Text 2"></img>
        <img className="project-allphotos" src='/media/photographsForTheFutureText3.png' alt="Photographs for the Future Instruction Text 3"></img>
        <img className="project-allphotos" src='/media/photographsForTheFutureText4.png' alt="Photographs for the Future Instruction Text 4"></img>
        <img className="project-allphotos" src='/media/photographsForTheFutureText5.png' alt="Photographs for the Future Instruction Text 5"></img>
        <img className="project-allphotos" src='/media/photographsForTheFutureText6.png' alt="Photographs for the Future Instruction Text 6"></img>
        <img className="project-allphotos" src='/media/photographsForTheFutureText7.png' alt="Photographs for the Future Instruction Text 7"></img>
        <img className="project-allphotos" src='/media/photographsForTheFutureText8.png' alt="Photographs for the Future Instruction Text 8"></img>
      </div>
      <div className="footer"/>
      <Footer/>
    </section>
    
  );
}

export default PhotographsForTheFuture;