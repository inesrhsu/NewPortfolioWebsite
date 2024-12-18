import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';

const StarCluster = () => {

  const projectPhotos=[
    {id:1, src:'/media/StarClusterPhoto1.png', alt:"Star Cluster Evolution Snapshot"},
    {id:2, src:'/media/StarClusterPhoto2.png', alt:"Star Cluster Evolution Snapshot"},
  ];

  return (
    
    <section className="projectpage">
      {/* <NavLink to="/home" className="navbarspace">
        <p>INÉS RODRÍGUEZ HSU</p>
      </NavLink> */}
      <div className="projecttitle">
        Star Cluster Evolution
      </div>
      <video className="project-photo1" autoPlay loop muted controls preload="auto" playsInline webkit-playsinline="true" poster="/media/StarClusterPhoto1.png">
        <source src="https://dy4k3ny7v09me.cloudfront.net/starClusterEvolution.mp4" type="video/mp4" />
        Your browser does not support the video tag. 
        This video shows a Star Cluster Evolution video.
      </video>
      <div className="projectdescription"> 
        I developed a program to produce star cluster evolution animations as would be 
        observed and photographed by Hubble Telescope and by James Webb Space Telescope 
        for given star cluster evolution models. The program produces images applying 
        the color filters and point spread functions of the desired telescope, for 
        each given stars' position, radius and luminosity, then stitches all images 
        into a video showing the star clusters' evolution over time. 
        <br /><br />
        Star clusters can have a lifespan of hundreds of millions of years, which
        is far beyond the time that Hubble Space Telescope or James Webb Space 
        Telescope are able to observe. By producing these videos we are able to 
        better understand what a star cluster evolution process would look like 
        visually if it were to be seen through a telescope. It allows for better
        visualization of the different evolution models that are being developed 
        by physicists, giving them also a visually more realistic way to present
        their star cluster evolution models.
        <br /><br />
        I presented my work and research process for producing these animations 
        with the research poster shown below.
        <br /><br />
        This work was made in collaboration with Professor Carl Rodriguez (University of North 
        Carolina) and Dr Ugo Niccoló Di Carlo.
        <br /><br />
      </div>
      <div className="projectsubtitle" style={{fontSize:23, paddingBottom:10}}>
      View more:
      </div>
      <ImageGallery images={projectPhotos}/>
      <div className="projectsubtitle" style={{fontSize:23, paddingBottom:10}}>
      View research poster:
      </div>
      <img className="project-photo1" src="/media/StarClusterPoster.png" alt="Star Cluster Evolution Research Poster"></img>
      <div className="footer"/> 
      <Footer/> 
    </section>
    
  );
}

export default StarCluster;
