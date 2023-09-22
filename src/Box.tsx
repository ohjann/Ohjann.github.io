import React, { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTrailTexture } from "@react-three/drei";
import { Mesh } from "three";

export const Box = (props: any) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null!);
  const [texture, onMove] = useTrailTexture();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (!hovered) {
      return (ref.current.rotation.y += delta * 2);
    }
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 2}
      onClick={event => click(!clicked)}
      onPointerMove={onMove}
      onPointerOver={event => hover(true)}
      rotation={[0, 0, 1.5]}
      onPointerOut={event => hover(false)}
    >
      <cylinderGeometry args={[1, 1, 0.1]} />
      <meshStandardMaterial color={hovered ? "pink" : "hotpink"} />
    </mesh>
  );
};
