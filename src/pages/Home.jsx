import React, { Suspense, useLayoutEffect, useEffect, useRef, useState} from 'react'
import { NavLink } from "react-router-dom"
import './../index.css'
import './Pages.css'
import { categories } from './Projects';
import {Canvas, useFrame} from '@react-three/fiber'
import Loader from '../components/Loader';
// import {useScroll} from '@react-three/fiber'
import {useGLTF, Html, Stage, PresentationControls, Float, useScroll, ScrollControls, OrbitControls} from '@react-three/drei';
import gsap from 'gsap';
import SplitType from 'split-type';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Coral = (props) => {
    const {scene} = useGLTF('/models/coral1objcleanedup.glb');  
    const ref = useRef();
    const tl = useRef();
    const scroll = useScroll();
    //runs constantly updating scroll offset?
    useFrame(() => {
        if(tl.current && scroll){
            const duration = tl.current.duration();
            if (duration > 0){
                tl.current.progress(scroll.offset);
            }
        }
    });

    useLayoutEffect(() => {
        if (scene){
            scene.traverse((child)=>{
                if (child.isMesh){
                    child.material.transparent=true;
                    // child.material.opacity=1;
                }
            });
        }
        tl.current = gsap.timeline(); //animate coral model
        tl.current.to(ref.current.position, {duration: 2, y: -0.5, z:1});
        tl.current.to(ref.current.rotation,{duration:2, x: 0, y:Math.PI*3},0); //Math.PI/10
        // tl.current.to(ref.current.material, {duration:3, opacity: 0.5});
    },[scene]);
    return <primitive object={scene} ref={ref} {...props} />
}

const ScrollOffsetUpdater = ({ setScrollOffset }) => {
    const scroll = useScroll();

    useFrame(() => {    
        setScrollOffset(scroll.offset); 
    });

    return null; // This component doesn't render anything
};

const AnimateText = ({text,textcolor}) => {
  const textRef = useRef(null);
  const splitTextRef = useRef(null);

  useEffect(() => {
    const observer= new IntersectionObserver((sections) => { //sections are the sections that have to be visible to trigger animation
      sections.forEach(section =>{
        if (section.isIntersecting) {
          if(splitTextRef.current){
            splitTextRef.current.revert();
          }
            splitTextRef.current = new SplitType(textRef.current,{types: 'words, chars', tagName: 'span'});
            gsap.from(splitTextRef.current.chars, { opacity: 0, y: 20, stagger: 0.05, clearProps: 'all'});
        }   
      });
    }, {threshold:0.1});

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current){
        observer.unobserve(textRef.current);
      }
      if (splitTextRef.current) { 
        splitTextRef.current.revert(); 
        splitTextRef.current = null; // Reset the reference 
        }
    };
  },[text]);
  return <div className="overlay-text1" ref={textRef} style={{color:textcolor}}>{text}</div>;
}


const Home = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [scale, setScale] = useState(0.001 * window.innerWidth);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [positionY, setPositionY] = useState(-0.001*window.innerHeight);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  const handleMouseEnter = (videoRef) => {
    if(videoRef.current && videoRef.current.paused) {
        videoRef.current.play();
    }
  }

  const handleMouseLeave = (videoRef) => {
    if(videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
    }
  }

  const handleTouchStart = (videoRef) => { 
    if (videoRef.current) { 
      if (videoRef.current.paused) { 
        videoRef.current.play(); 
      } else { 
        videoRef.current.pause(); 
      } 
    } 
  };

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);

      if (window.innerWidth < 400){
        setScale(0.002*window.innerWidth);
        setPositionY(-1.5);
      }
      else if (window.innerWidth < 600){
        setScale(0.0019*window.innerWidth);
        setPositionY(-1.0);
      }
      else if(window.innerWidth < 1000){
        setScale(0.0017*window.innerWidth);
        setPositionY(-0.75);
      } 
      else if(window.innerWidth < 1400){
        setScale(0.0013*window.innerWidth);
        setPositionY(-0.5);
      }
      else {
        setScale(0.0012 * window.innerWidth);
        setPositionY(-0.5);
      }
     
      
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    handleResize();

    return() => {
      window.removeEventListener('resize', handleResize);
    };
  },[]);

  return (
    <section className="home">
      <Navbar scrollOffset={scrollOffset} />
      <div className="maintitle">
            <p>INÉS RODRÍGUEZ HSU</p>
            {/* <p>Inés Rodríguez Hsu</p> */}
          </div>
      <Canvas className="coral-model" dpr={[1, 2]}  camera={{fov:45, position:[0,0,5]}} >  {/*style={{"position":"absolute"}} */} 
        {/* <color attach="background" args={["#FFC0CB"]} /> */}
        {/* <Html fullscreen >
          <div className="maintitle">
            <p>INÉS RODRÍGUEZ HSU</p>
            {/* <p>Inés Rodríguez Hsu</p> */}
          {/* </div> */}
        {/* </Html> */} 
         {/* <PresentationControls speed={1.5} global={false}  polar={[-0.1, 3*Math.PI / 8]}> */}
          {/* <Stage environment={null} shadows={false} ground={false}> */}
            <ambientLight intensity={2} />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              // minPolarAngle={Math.PI / 4}
              minPolarAngle={Math.PI / 2 - Math.PI / 5 }
              maxPolarAngle={Math.PI / 2 - Math.PI / 12 }
              // minAzimuthAngle={-Math.PI / 2}
              // maxAzimuthAngle={Math.PI / 2}
              minDistance={3}
              maxDistance={10}
              target={[0, 0.5+positionY-0.3, 1]} //adjust by GSAP movement
              />    
            {/* <ScrollControls pages={1} damping={0.25}> */}
              {/* <ScrollOffsetUpdater setScrollOffset={setScrollOffset} /> */}
              <Suspense fallback={<Loader />}>
                  <Float
                  speed={1} // Animation speed, defaults to 1
                  rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
                  floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                  floatingRange={[-0.01,0.01]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                  >
                    <Coral position={[0,positionY-0.3,0]} scale={scale} rotation={[0,Math.PI,0]} />
                  </Float> 
              </Suspense>
            {/* </ScrollControls> */}
          {/* </Stage> */}
        {/* </PresentationControls> */}
        
        </Canvas>
            
        <div className="video-container">
            <NavLink to={`/work#${categories[0].replace(/\s+/g, '-')}`}>
              <AnimateText text={`Physics and Space Simulation`} textcolor={'var(--bg-color)'} />
            </NavLink>
          <video className="home-video" autoPlay={true} loop muted preload="auto" playsInline webkit-playsinline="true" poster="/media/VRBHPhoto.png">
            {/* ref={videoRef1} 
            onMouseEnter={() => handleMouseEnter(videoRef1)} 
            onMouseLeave={() => handleMouseLeave(videoRef1)} 
            onTouchStart={() => handleTouchStart(videoRef1)} > */}
            <source src="https://dy4k3ny7v09me.cloudfront.net/VRBHIcon.mp4" type="video/mp4" />
          </video> 
        </div>
        <div className="video-container">
              <NavLink to={`/work#${categories[1].replace(/\s+/g, '-')}`}>
                <AnimateText text={`Animation`} textcolor={'var(--first-color)'}/>
              </NavLink> 
          <video className="home-video" autoPlay={true} loop muted preload="auto" playsInline webkit-playsinline="true" poster="/media/SoulsPhoto5.png">
            {/* ref={videoRef2} 
            onMouseEnter={() => handleMouseEnter(videoRef2)} 
            onMouseLeave={() => handleMouseLeave(videoRef2)} 
            onTouchStart={() => handleTouchStart(videoRef2)} > */}
            <source src="/media/SoulsIcon.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="video-container">
              <NavLink to={`/work#${categories[3].replace(/\s+/g, '-')}`}>
                <AnimateText text={`Computer Generated Art`} textcolor={'var(--first-color)'}/>
              </NavLink> 
          <video className="home-video" autoPlay={true} loop muted preload="auto" playsInline webkit-playsinline="true" poster="/media/HappyDumplingPhoto.png">
            {/* ref={videoRef3} 
            onMouseEnter={() => handleMouseEnter(videoRef3)} 
            onMouseLeave={() => handleMouseLeave(videoRef3)} 
            onTouchStart={() => handleTouchStart(videoRef3)} > */}
            <source src="/media/HappyDumplingIcon.mp4" type="video/mp4" />
          </video>
        </div> 
        <Footer/>
    </section>
    
  );
}

export default Home;


  