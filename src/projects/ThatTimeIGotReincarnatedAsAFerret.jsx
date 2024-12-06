import React from 'react';
import './../pages/Pages.css';
import { NavLink } from "react-router-dom";
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';

const ThatTimeIGotReincarnatedAsAFerret = () => {

  const projectPhotos=[
    {id:1, src:'/media/thatTimeIGotReincarnatedAsAFerret.png',        alt:"Home page of 'That Time I Got Reincarnated as a Ferret'"},
    {id:2, src:'/media/thatTimeIGotReincarnatedAsAFerretPhoto2.png',  alt:"Game start of 'That Time I Got Reincarnated as a Ferret'"},
    {id:3, src:'/media/thatTimeIGotReincarnatedAsAFerretPhoto3.png',  alt:"Ferret climbing in 'That Time I Got Reincarnated as a Ferret'"},
    {id:4, src:'/media/thatTimeIGotReincarnatedAsAFerretPhoto4.png',  alt:"Ferret climbing in 'That Time I Got Reincarnated as a Ferret'"},
    {id:5, src:'/media/thatTimeIGotReincarnatedAsAFerretPhoto5.png',  alt:"Obstacle drop in 'That Time I Got Reincarnated as a Ferret'"},
    {id:6, src:'/media/thatTimeIGotReincarnatedAsAFerretPhoto6.png',  alt:"Obstacle drop in 'That Time I Got Reincarnated as a Ferret'"},
    {id:7, src:'/media/thatTimeIGotReincarnatedAsAFerretPhoto7.png',  alt:"Winning animation in 'That Time I Got Reincarnated as a Ferret'"},
    {id:8, src:'/media/thatTimeIGotReincarnatedAsAFerretPhoto8.png',  alt:"Winning animation in 'That Time I Got Reincarnated as a Ferret'"},
    {id:9, src:'/media/thatTimeIGotReincarnatedAsAFerretPhoto9.png',  alt:"Winning screen in 'That Time I Got Reincarnated as a Ferret'"},
    {id:10, src:'/media/thatTimeIGotReincarnatedAsAFerretPhoto10.png', alt:"Losing screen in 'That Time I Got Reincarnated as a Ferret'"},
  ];

  return (
    
    <section className="projectpage">
      <div className="projecttitle">
      That Time I Got Reincarnated as a Ferret and Forced to Climb for My Freedom
      </div>
      {/* <video className="project-photo1" autoPlay loop muted controls preload="auto" playsInline webkit-playsinline="true" poster="/media/StoneNightmarePhoto1.png">
        <source src="https://dy4k3ny7v09me.cloudfront.net/TheStoneNightmareVid.mp4" type="video/mp4" />
        Your browser does not support the video tag. 
        This video shows the video of The Stone Nightmare Bitsy game.
      </video> */}
      <div className="projectdescription">
        I collaborated as a programmer in developing the Unity game 'That Time I 
        Got Reincarnated As A Ferret and Forced to Climb for My Freedom', together 
        with Hanke Chen (programmer and music) and Ashley Kim (producer and artist).
        <br /><br />
        'That Time I Got Reincarnated as a Ferret and Forced to Climb for My Freedom' 
        is a fun game in which a ferret needs to grab onto colorful rocks to climb out 
        of a hole while random objects of increasingly bigger size fall into the hole. 
        The ferret's body wiggles and sways, so the player has to use the ferret's 
        body weight and 
        <br /><br />
        My role in the game involved programming several aspects of the game:
        <br /><br />
        &bull; A grid based and path based random object placement algorithm to place 
        the climbing rocks, such that each time the game someone plays the game 
        it generates a new map of colored rocks.<br />
        &bull; A rock grabbing detection game mechanism, such that the game detects when 
        the ferret can grab a rock, has grabbed a rock or lets go of a rock, and 
        whether the ferret is grabbing onto any rocks or should fall.<br />
        &bull; Dropping of random objects, at timed intervals which get shorter the higher
        a player climbs. The dropped objects also get larger as the player climbs.<br />
        &bull; I programmed and animated the game condition such that the ferret 
        floats upwards once it grabs the trophy, then eventually the ferret falls back
        into the ferret hole and reincarnates as a random object. This shows a 'You 
        Reincarnated' page, along with the time taken. If the ferret falls it falls 
        to the bottom of the hole, and this shows a 'You Failed' page. <br />
        &bull; I also implemented the mini-map feature of the game to show the current 
        location of the ferret within the full height of the climbing wall, to show
        the player their progress and the time since the game start. 
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

export default ThatTimeIGotReincarnatedAsAFerret;
