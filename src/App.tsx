import React from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls, Gltf } from "@react-three/drei";
import { Box } from "./Box";

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
          environment="city"
        />
        <Gltf
          castShadow
          receiveShadow
          scale={10}
          src="osborne_1.glb"
          position={[-2, -2, 2]}
        />
        <Gltf
          castShadow
          receiveShadow
          scale={0.002}
          src="tr-808.glb"
          position={[2, -1.6, -3]}
          rotation={[0, 0, 0]}
        />
        <OrbitControls
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1.9}
          makeDefault
        />
      </Canvas>
    </div>
  );
}

export default App;
