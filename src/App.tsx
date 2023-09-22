import React, { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import {
  Stage,
  Gltf,
  Float,
  Sparkles,
  OrbitControls,
  Environment
} from "@react-three/drei";

// https://codesandbox.io/s/9m4tpc?file=%2Fsrc%2FApp.js
function App() {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          zIndex: 1
        }}
      >
        <div
          style={{ position: "absolute", top: 40, left: 40, fontSize: "13px", color: 'white' }}
        >
          eoghan.hyn.es
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            fontSize: "13px",
            color: 'white'
          }}
        >
          22/09/2023
        </div>
      </div>
      <Canvas
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [5, 5, 5] }}
        orthographic
        resize={{ scroll: false }}
      >
        <color attach="background" args={hovered ? ["black"] : ["skyblue"]} />
        <Stage
          intensity={0.5}
          preset="soft"
          shadows={false}
          adjustCamera={0.3}
          environment="dawn"
        >
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
              //onPointerOver={event => setHovered(true)}
              // onPointerOut={event => setHovered(false)}
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
              onClick={event => setHovered(!hovered)}
              //onPointerOver={event => setHovered(true)}
              //onPointerOut={event => setHovered(false)}
              castShadow
              receiveShadow
              scale={9}
              src="yamaha_dx7.glb"
              position={[2, -3.2, -2]}
              rotation={[0, 0, 0]}
            />
          </Float>
          <OrbitControls
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 1.9}
            makeDefault
          />
        </Stage>
      </Canvas>
    </div>
  );
}

export default App;
