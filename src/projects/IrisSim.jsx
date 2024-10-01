import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";

const IrisSim = () => {
  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Iris Lunar Rover Simulation
      </div>
      <video className="project-photo1" src="/media/IrisVisualization.mp4" alt="Video of Iris Lunar Rover Visualization"autoPlay loop muted></video>
      <div className="projectdescription">
      I was part of the team of students at Carnegie Mellon University working
      to send the <a href='https://irislunarrover.space'>'Iris Lunar Rover'</a> to 
      the Moon. This is a simulation I made for the Iris lunar rover team during 
      mission when the rover was aboard <a href='https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=PEREGRN-1'>Peregrine Mission One</a>, 
      a mission aiming to land on the Moon in January 2024. Astrobotic's Peregrine 
      lander was intended to land on the Moon, yet was not able to attempt a Lunar 
      landing due to a propulsion issue. Since a lunar landing was not possible 
      the Iris lunar rover team explored alternatives. A hypothetical scenario 
      that we explored (yet never executed) included deploying the rover in space 
      to obtain lander images of the rover in space and for Iris to capture an 
      image of the lander from space. This simulation was made to visualize this 
      hypothetical situation to the Iris team and the Astrobotic team, by showing 
      the views from both front and back rover cameras, and a lander camera upon 
      deployment, as well as a general view of the rover trajectory calculated 
      using accurate physics. I produced this simulation using Unity.
      <br /><br />
      Note: the Iris rover was never deployed in space. 
      <br /><br />
      This was made in collaboration with the Iris Lunar Rover team.
        <br /><br />
      </div>
      <div className="footer"/>   
    </section>
    
  );
}

export default IrisSim;
