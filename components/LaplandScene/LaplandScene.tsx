import { createRef, useRef, useState } from "react";
import { Mesh } from "three";
// import { OrbitControls } from "@react-three/drei";
// import * as dat from "dat.gui";
import Hills from "./Hills";
import Auroras from "./Auroras";
import Snow from "./Snow";
import Trees from "./Trees";
import Forest from "./Forest";
import { createNoise2D } from "simplex-noise";
import alea from "alea";
import Moose from "./Moose";
import { clamp } from "three/src/math/MathUtils";
import { OrbitControls } from "@react-three/drei";

const hillsRef = createRef<Mesh>();

const simplex = createNoise2D(alea("hello"));

const hillsHeight = (x: any, y: any) => {
  return simplex(x / 16, y / 14) * 1.8 * clamp((y + 30) * 0.1, 0, 1);
};

export default function LaplandScene() {
  return (
    <group>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[0, 0, 1]}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={100}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <mesh position={[0, -50, 10]} rotation={[0, 0, 0]}>
        <planeGeometry args={[500, 100]} />
        <meshBasicMaterial toneMapped={false} />
      </mesh>
      <Hills hillsRef={hillsRef} hillsHeight={hillsHeight} />
      <Auroras planeArgs={[500, 100, 1, 1]} position={[0, 20, -50]} />
      <Snow />
      <Trees hillsHeight={hillsHeight} count={4} />
      <Forest hillsHeight={hillsHeight} />
      <Moose hillsHeight={hillsHeight} />
    </group>
  );
}
