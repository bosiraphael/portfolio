import { Canvas, useThree } from "@react-three/fiber";
import styles from "../styles/Home.module.css";
import React from "react";
import { Color } from "three";

const Scene = () => {
  const { scene } = useThree();
  scene.background = new Color("#c9f5ff");
  return <></>;
};

type Props = {};

export default function LaplandScene({}: Props) {
  return (
    <Canvas
      shadows
      className={styles.canvas}
      camera={{
        position: [0, 1, 10],
      }}
    >
      <Scene />
      <ambientLight intensity={2} />
      <directionalLight
        position={[0, 1, 1]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[100, 100, 100, 100]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </Canvas>
  );
}
