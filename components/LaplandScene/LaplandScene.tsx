import { useRef } from "react";
import { createNoise2D } from "simplex-noise";
import alea from "alea";
import { clamp } from "three/src/math/MathUtils";
import Hills from "./Hills";
import Auroras from "./Auroras";
import Snow from "./Snow";
import Trees from "./Trees";
import Forest from "./Forest";
import Moose from "./Moose";
import { Preload } from "@react-three/drei";

const simplex = createNoise2D(alea("hello"));

const hillsHeight = (x: any, y: any) => {
  return simplex(x / 16, y / 14) * 1.8 * clamp((y + 30) * 0.1, 0, 1);
};

export default function LaplandScene() {
  const hillsRef = useRef<any>(null);
  return (
    <group>
      <ambientLight intensity={1} />

      <mesh position={[0, -50, 10]} rotation={[0, 0, 0]}>
        <planeGeometry args={[500, 100]} />
        <meshBasicMaterial toneMapped={false} />
      </mesh>
      <Hills hillsRef={hillsRef} hillsHeight={hillsHeight} />
      <Auroras planeArgs={[500, 100, 1, 1]} position={[0, 20, -50]} />
      <Snow />
      <Trees hillsHeight={hillsHeight} count={3} />
      <Forest hillsHeight={hillsHeight} />
      <Moose hillsHeight={hillsHeight} />

      <Preload all />
    </group>
  );
}
