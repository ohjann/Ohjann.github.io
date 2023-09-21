import React from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls, Gltf, Float, Sparkles } from "@react-three/drei";

// https://codesandbox.io/s/9m4tpc?file=%2Fsrc%2FApp.js
function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [5, 5, 5] }}
        orthographic
      >
        <color attach="background" args={["skyblue"]} />
        <Stage
          intensity={0.5}
          preset="soft"
          shadows={{
            type: "accumulative",
            color: "skyblue",
            colorBlend: 2,
            opacity: 1
          }}
          adjustCamera={1}
          environment="dawn"
        />
        <Float>
          <Gltf
            castShadow
            receiveShadow
            scale={10}
            src="osborne_1.glb"
            position={[-4, -3, 2]}
          />
        </Float>
        <Sparkles count={50} scale={30} size={15} speed={0.8} noise={1} />
        <Float floatIntensity={0.3} speed={0.5}>
          <Gltf
            castShadow
            receiveShadow
            scale={0.002}
            src="tr-808.glb"
            position={[0, -2.6, -7]}
            rotation={[0, 0, 0]}
          />
        </Float>
        <Float floatIntensity={1.8} rotationIntensity={0.8} speed={0.7}>
          <Gltf
            castShadow
            receiveShadow
            scale={9}
            src="yamaha_dx7.glb"
            position={[2, -3.2, -2]}
            rotation={[0, 0, 0]}
          />
        </Float>
      </Canvas>
    </div>
  );
}

export default App;
