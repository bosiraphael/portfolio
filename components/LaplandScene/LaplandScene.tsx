import { createRef } from "react";
import { Mesh } from "three";
import { createNoise2D } from "simplex-noise";
import alea from "alea";
import { clamp } from "three/src/math/MathUtils";
import dynamic from "next/dynamic";

const hillsRef = createRef<Mesh>();

const simplex = createNoise2D(alea("hello"));

const hillsHeight = (x: any, y: any) => {
  return simplex(x / 16, y / 14) * 1.8 * clamp((y + 30) * 0.1, 0, 1);
};

const Hills = dynamic(() => import("./Hills"), { ssr: false });
const Auroras = dynamic(() => import("./Auroras"), { ssr: false });
const Snow = dynamic(() => import("./Snow"), { ssr: false });
const Trees = dynamic(() => import("./Trees"), { ssr: false });
const Forest = dynamic(() => import("./Forest"), { ssr: false });
const Moose = dynamic(() => import("./Moose"), { ssr: false });

export default function LaplandScene() {
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
    </group>
  );
}
