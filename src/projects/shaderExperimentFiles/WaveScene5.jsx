import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useEffect } from "react";

import vertexShader from './vertexShader2.glsl';
import fragmentShader from './fragmentShader3.glsl';

const WaveMesh = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const meshes = [];

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
    }), []
  );

  useFrame((state) => {
    const { clock } = state;
    const elapsedTime = clock.getElapsedTime();
    mesh.current.material.uniforms.u_time.value = elapsedTime;

     mesh.current.rotation.set(-Math.PI/((Math.sin(1/2)*2+4)), Math.PI / 6, 0);
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI/2.5, Math.PI / 6, 0]} scale={1.5}>
    <planeGeometry args={[8, 8, 45*8, 45*8]} />
    <shaderMaterial
    fragmentShader={fragmentShader}
    vertexShader={vertexShader}
    uniforms={uniforms}
    />
  </mesh>
  );
};

const Scene = () => {
  return (
    <section className="canvas-container">
      <Canvas className="canvas" dpr={[1, 2]} camera={{ position: [15, 0, 15], rotation:[0,0,0], fov: 45 }} shadows>
        <color attach="background" args={["#FFC0CB"]} />
        <ambientLight intensity={0.7} /> 
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow/>

        <WaveMesh />

        <OrbitControls />
      </Canvas>
    </section>
  );
};
  
export default Scene;