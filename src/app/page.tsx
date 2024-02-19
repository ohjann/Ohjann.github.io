"use client";
import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Overlay } from "./Overlay";
import { Stage, Gltf, Float, Sparkles, Html } from "@react-three/drei";
import { Oval } from "react-loading-icons";
import Image from "next/image";
import OpenInNewIcon from './OpenInNewIcon';

const Loader = () => (
  <Html center>
    <Oval />
  </Html>
);

export default function Home() {
  const [hovered, setHovered] = useState(false);
  useEffect(
    () => {
      document.body.style.cursor = hovered ? "pointer" : "auto";
    },
    [hovered]
  );
  return (
    <div className="home">
      <Overlay />
      <Canvas
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [5, 5, 5] }}
        orthographic
        resize={{ scroll: false }}
      >
        <Suspense fallback={<Loader />}>
          <Stage
            intensity={0.5}
            preset="soft"
            shadows={false}
            adjustCamera={0.3}
            environment="dawn"
          >
            <Float>
              <Gltf
                onPointerOver={event => setHovered(true)}
                onPointerOut={event => setHovered(false)}
                onClick={() => {
                  window.location.href = "https://github.com/ohjann/";
                }}
                castShadow
                receiveShadow
                scale={10}
                src="osborne_1.glb"
                position={[-4, -3, 2]}
              />
            </Float>
            <Html position={[-4, -3, 2]}>
              <a className="links" href="https://github.com/ohjann/">
                github
                <OpenInNewIcon />
              </a>
            </Html>
            <Sparkles count={50} scale={30} size={10} speed={0.8} noise={1} />
            <Float floatIntensity={0.3} speed={0.5}>
              <Gltf
                onPointerOver={event => setHovered(true)}
                onPointerOut={event => setHovered(false)}
                onClick={() => {
                  window.location.href = "https://soundcloud.com/ohjann";
                }}
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
                onClick={() => {
                  window.location.href = "https://ohjann.bandcamp.com/";
                }}
                onPointerOver={event => setHovered(true)}
                onPointerOut={event => setHovered(false)}
                castShadow
                receiveShadow
                scale={9}
                src="yamaha_dx7.glb"
                position={[2, -3.2, -2]}
                rotation={[0, 0, 0]}
              />
            </Float>
            <Html position={[0, -1.6, -3]}>
              <a className="links" href="https://ohjann.bandcamp.com/">
                soundcloud
                <OpenInNewIcon />
              </a>
            </Html>
          </Stage>
        </Suspense>
      </Canvas>
    </div>
  );
}
