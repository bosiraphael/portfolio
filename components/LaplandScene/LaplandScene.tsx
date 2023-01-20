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

const hillsRef = createRef<Mesh>();

const hillsHeight = (x: any, y: any) => {
  const simplex = createNoise2D(alea("hello"));

  return simplex(x / 16, y / 14) * 1.8 * clamp((y - 12) * 0.5, 0, 1);
};

export default function LaplandScene() {
  // useFrame(() => {
  //   if (data.range(0, 1 / 2) === 1) {
  //     groupRef.current.position.y = 100;
  //   } else {
  //     groupRef.current.position.y = 0;
  //   }
  // });

  return (
    <group>
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[0, 1, 1]}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-near={0}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.001}
      />
      <mesh position={[0, -50, 10]} rotation={[0, 0, 0]}>
        <planeGeometry args={[500, 100]} />
        <meshBasicMaterial toneMapped={false} />
      </mesh>
      <Hills hillsRef={hillsRef} hillsHeight={hillsHeight} />
      <Auroras planeArgs={[500, 100, 100, 100]} position={[0, 20, -50]} />
      <Snow />
      {/* <Trees hillsHeight={hillsHeight} />
      <Forest hillsHeight={hillsHeight} />
      <Moose hillsHeight={hillsHeight} /> */}
    </group>
  );
}
