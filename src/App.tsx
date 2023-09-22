import React, { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Overlay } from './Overlay';
import {
  Stage,
  Gltf,
  Float,
  Sparkles,
} from "@react-three/drei";

// https://codesandbox.io/s/9m4tpc?file=%2Fsrc%2FApp.js
function App() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="container">
      <Overlay />
      <Canvas
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [5, 5, 5] }}
        orthographic
        resize={{ scroll: false }}
      >
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
        </Stage>
      </Canvas>
    </div>
  );
}

export default App;
