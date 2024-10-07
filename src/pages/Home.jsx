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
        tl.current.to(ref.current.rotation,{duration:2, x: Math.PI/6, y:Math.PI*3},0);
        // tl.current.to(ref.current.material, {duration:3, opacity: 0.5});
    },[scene]);
    return <primitive object={scene} ref={ref} {...props} />
}

const ScrollOffsetUpdater = ({ setScrollOffset }) => {
    // console.log("in scrollOffset")
    const scroll = useScroll();

    useFrame(() => {    
        setScrollOffset(scroll.offset); 
        // console.log(scroll.offset);
    });

    return null; // This component doesn't render anything
};

const HTMLContentCoral = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <group position = {[0,`${height/2}px`, 1]}>
      
      
    </group>
  )
}

const AnimateText = ({text}) => {
  const textRef = useRef(null);
  const splitTextRef = useRef(null);

  useEffect(() => {
    const observer= new IntersectionObserver((sections) => { //sections are the sections that have to be visible to trigger animation
      sections.forEach(section =>{
        if (section.isIntersecting) {
          console.log('Text is in view, triggering animation.');
          if(splitTextRef.current){
            console.log('reverting current');
            splitTextRef.current.revert();
          }
          // if (!splitTextRef.current){
            console.log('creating new animation');
            splitTextRef.current = new SplitType(textRef.current,{types: 'words, chars', tagName: 'span'});
            // gsap.fromTo(splitText.chars, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
            gsap.from(splitTextRef.current.chars, { opacity: 0, y: 20, stagger: 0.05, clearProps: 'all'});
            // observer.unobserve(section.target);
          // }
        }   
      });
    }, {threshold:0.1});

    // const observer = new IntersectionObserver(handleScroll, {
    //   threshold: 0.1 // Trigger when 10% of the element is visible 
    // });

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
  return <div className="overlay-text1" ref={textRef}>{text}</div>;
}


const Home = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const handleMouseEnter = (videoRef) => {
    if(videoRef.current) {
        videoRef.current.play();
    }
  }

  const handleMouseLeave = (videoRef) => {
    if(videoRef.current) {
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


  return (
    <section className="home">
      <Navbar scrollOffset={scrollOffset} />
      

      <Canvas dpr={[1, 2]}  camera={{fov:45}} >  {/*style={{"position":"absolute"}} */} 
        <color attach="background" args={["#FFC0CB"]} />
        <Html fullscreen >
          <div className="maintitle">
            <p>INÉS RODRÍGUEZ HSU</p>
            {/* <p>Inés Rodríguez Hsu</p> */}
          </div>
        </Html>
        <PresentationControls speed={1.5} global zoom={0.3} polar={[-0.1, Math.PI / 4]}>
          {/* <Stage environment={null} shadows={false} ground={false}> */}
            <ambientLight intensity={2} />
            <pointLight position={[10, 10, 10]} />
            {/* <OrbitControls enableZoom={false}/> */}    
            <ScrollControls pages={1} damping={0.25}>
              <ScrollOffsetUpdater setScrollOffset={setScrollOffset} />
              <Suspense fallback={<Loader />}>
                  <Float
                  speed={1} // Animation speed, defaults to 1
                  rotationIntensity={1} // XYZ rotation intensity, defaults to 1
                  floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                  floatingRange={[0,0.001]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                  >
                    <Coral position={[0,-1.3,1]} scale={0.001*window.innerWidth} rotation={[0,Math.PI,0]} />
                  </Float> 
              </Suspense>
            </ScrollControls>
          {/* </Stage> */}
        </PresentationControls>
        
        </Canvas>
      {/* <div className="coral-page" >Hello</div> */}


        <div className="video-container">
          <video className="home-video" autoPlay={false} loop muted preload="auto" poster="/media/VRBHPhoto.png"
            ref={videoRef1} 
            onMouseEnter={() => handleMouseEnter(videoRef1)} 
            onMouseLeave={() => handleMouseLeave(videoRef1)} 
            onTouchStart={() => handleTouchStart(videoRef1)} >
            <source src="https://dy4k3ny7v09me.cloudfront.net/vrBlackHole.mp4" type="video/mp4" />
          </video> 
            <NavLink to={`/work#${categories[0].replace(/\s+/g, '-')}`}>
              <AnimateText text={`Physics and Space Simulation`} />
            </NavLink>
        </div>
        <div className="video-container">
          {/* <div className="overlay-text2"> */}
            
              <NavLink to={`/work#${categories[1].replace(/\s+/g, '-')}`}>
                <AnimateText text={`Animation`} />
              </NavLink> 
            
          {/* </div> */}
          <video className="home-video" autoPlay={false} loop muted preload="auto" poster="/media/SoulsPhoto5.png"
            ref={videoRef2} 
            onMouseEnter={() => handleMouseEnter(videoRef2)} 
            onMouseLeave={() => handleMouseLeave(videoRef2)} 
            onTouchStart={() => handleTouchStart(videoRef2)} >
            <source src="https://dy4k3ny7v09me.cloudfront.net/souls.mp4" type="video/mp4" />
          </video>
         
        </div>
        
    </section>
  );
}

export default Home;


  