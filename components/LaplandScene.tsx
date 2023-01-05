import { Canvas, useThree } from "@react-three/fiber";
import styles from "../styles/Home.module.css";
import React, { createRef, useEffect, useState } from "react";
import {
  BufferAttribute,
  BufferGeometry,
  Color,
  Mesh,
  PlaneGeometry,
} from "three";
import { OrbitControls } from "@react-three/drei";
import { createNoise2D } from "simplex-noise";
import alea from "alea";
import * as dat from "dat.gui";

const gui = new dat.GUI();

const Scene = () => {
  const { scene } = useThree();
  scene.background = new Color("#c9f5ff");
  return <></>;
};

const hillsRef = createRef<Mesh>();

const Hills = ({
  hillsXScale,
  hillsYScale,
  hillsZScale,
}: {
  hillsXScale: number;
  hillsYScale: number;
  hillsZScale: number;
}) => {
  useEffect(() => {
    const simplex = createNoise2D(alea("hello"));
    const hillsGeometry = hillsRef.current?.geometry;

    const position = hillsGeometry?.attributes?.position;
    if (!position) return;

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);
      const z = position.getZ(i);
      const noise = simplex(x * hillsXScale, y * hillsYScale) * hillsZScale;
      position.setZ(i, noise);
    }

    position.needsUpdate = true;
    hillsGeometry.computeVertexNormals();
  }, [hillsXScale, hillsYScale, hillsZScale]);

  return (
    <mesh
      ref={hillsRef}
      receiveShadow
      castShadow
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1, 0]}
    >
      <planeGeometry args={[10, 10, 100, 100]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

type Props = {};

export default function LaplandScene({}: Props) {
  let guiHillsXScale: dat.GUIController,
    guiHillsYScale: dat.GUIController,
    guiHillsZScale: dat.GUIController;
  const [debugObject, setDebugObject] = useState({
    hillsXScale: 0.1,
    hillsYScale: 0.1,
    hillsZScale: 0.1,
  });
  useEffect(() => {
    guiHillsXScale = gui
      .add(debugObject, "hillsXScale", 0, 1)
      .onChange((value) => {
        setDebugObject({ ...debugObject, hillsXScale: value });
      });
    guiHillsYScale = gui
      .add(debugObject, "hillsYScale", 0, 1)
      .onChange((value) => {
        setDebugObject({ ...debugObject, hillsYScale: value });
      });
    guiHillsZScale = gui
      .add(debugObject, "hillsZScale", 0, 1)
      .onChange((value) => {
        setDebugObject({ ...debugObject, hillsZScale: value });
      });

    return () => {
      gui.remove(guiHillsXScale);
      gui.remove(guiHillsYScale);
      gui.remove(guiHillsZScale);
    };
  }, []);

  return (
    <Canvas
      shadows
      className={styles.canvas}
      camera={{
        position: [0, 1, 10],
      }}
    >
      <Scene />
      <OrbitControls />
      <ambientLight intensity={0.1} />
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
      <Hills
        hillsXScale={debugObject.hillsXScale}
        hillsYScale={debugObject.hillsYScale}
        hillsZScale={debugObject.hillsZScale}
      />
    </Canvas>
  );
}
