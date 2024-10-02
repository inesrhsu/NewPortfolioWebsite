import React, { Suspense, useLayoutEffect, useRef} from 'react'
import { NavLink } from "react-router-dom"
import './../index.css'
import './Pages.css'
import {Canvas, useFrame} from '@react-three/fiber'
import Loader from '../components/Loader';
// import useLoader from '@react-three/fiber'
import {useGLTF, Html, Stage, PresentationControls, Float, useScroll, ScrollControls, OrbitControls} from '@react-three/drei';
import gsap from 'gsap';


const Coral = (props) => {
    const {scene} = useGLTF('/models/coral1objcleanedup.glb');
    
    const ref = useRef();
    const tl = useRef();
    const scroll = useScroll();

    useFrame(() => {
        // const t = clock.getElapsedTime();
        // ref.current.position.y = Math.sin(t)*0.5;
        // console.log(scroll.offset);
        if(tl.current && scroll){
            const duration = tl.current.duration();
            if (duration > 0){
                tl.current.progress(scroll.offset);
            }
        }
        // tl.current.seek(scroll.offset * tl.current.duration());
    });

    useLayoutEffect(() => {
        if (scene){
            scene.traverse((child)=>{
                if (child.isMesh){
                    // child.material.transparent=true;
                    child.material.opacity=0;
                }
            });
        }
        tl.current = gsap.timeline();
        tl.current.to(ref.current.position, {duration: 3, y: -0.8, z:3});
        tl.current.to(ref.current.rotation,{duration:3, x: Math.PI/6, y:Math.PI*3},0);
        tl.current.to(ref.current.material, {duration:3, opacity:0});
    },[scene]);
    
    
    // useLayoutEffect(() => {
    //     gsap.to(ref.current.position, { duration: 2, y: 1 });
    // }, []);
    

    return <primitive object={scene} ref={ref} {...props} />
}

const Home = () => {
  return (
    <section className="home">
        <div className="maintitle">
            <p>INÉS RODRÍGUEZ HSU</p>
        </div>
        <Canvas dpr={[1, 2]}  camera={{fov:45}} style={{"position":"absolute"}}>  

            {/* <color attach="background" args={["white"]} /> */}
            <color attach="background" args={["#FFC0CB"]} />
            {/* <color attach="background" args={["rgb(180,218,225)"]} /> */}
             <PresentationControls speed={1.5} global zoom={0.3} polar={[-0.1, Math.PI / 4]}>
                <Stage environment={null} shadows={false} ground={false}>
                    <ambientLight intensity={2} />
                    <pointLight position={[10, 10, 10]} />
                    {/* <OrbitControls enableZoom={false}/> */}
                    

                    <Suspense fallback={<Loader />}>
                    <Float
                    speed={1} // Animation speed, defaults to 1
                    rotationIntensity={1} // XYZ rotation intensity, defaults to 1
                    floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                    floatingRange={[0,0.001]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                    >
                    
                    <ScrollControls pages={2} damping={0.25}>

                    <Coral position={[0,-1.3,1]} scale={1.6} rotation={[0,Math.PI,0]}/>
                    </ScrollControls>
                    </Float> 

                    
                    </Suspense>
                </Stage>
            </PresentationControls>
        </Canvas>

    

    </section>
  );
}

export default Home;





