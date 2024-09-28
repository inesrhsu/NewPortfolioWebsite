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
    const {scene} = useGLTF('/media/coral1objcleanedup.glb');
    
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
        
    

    </section>
  );
}

export default Home;





