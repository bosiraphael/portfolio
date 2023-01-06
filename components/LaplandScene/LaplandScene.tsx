import { Canvas, useThree } from "@react-three/fiber";
import styles from "../../styles/Home.module.css";
import { createRef, useEffect, useState } from "react";
import { Color, Mesh } from "three";
import { OrbitControls } from "@react-three/drei";
import * as dat from "dat.gui";
import Hills from "./Hills";
import Auroras from "./Auroras";
import Snow from "./Snow";
import Tree from "./Tree";
import Forest from "./Forest";
import { createNoise2D } from "simplex-noise";
import alea from "alea";

const gui = new dat.GUI();

const Scene = () => {
  const { scene } = useThree();
  scene.background = new Color("#c9f5ff");
  return <></>;
};

const hillsRef = createRef<Mesh>();

type Props = {};

export default function LaplandScene({}: Props) {
  let guiHillsXScale: dat.GUIController,
    guiHillsYScale: dat.GUIController,
    guiHillsZScale: dat.GUIController,
    guiHillsXOffset: dat.GUIController,
    guiHillsYOffset: dat.GUIController;

  const [debugObject, setDebugObject] = useState({
    hillsXScale: 16,
    hillsYScale: 14,
    hillsZScale: 1.8,
    hillsXOffset: 0,
    hillsYOffset: 0,
  });

  const hillsHeight = (x: any, y: any) => {
    const simplex = createNoise2D(alea("hello"));

    return (
      simplex(
        (x + debugObject.hillsXOffset) / debugObject.hillsXScale,
        (y + debugObject.hillsYOffset) / debugObject.hillsYScale
      ) * debugObject.hillsZScale
    );
  };

  useEffect(() => {
    guiHillsXScale = gui
      .add(debugObject, "hillsXScale", 0, 20)
      .onChange((value) => {
        setDebugObject({ ...debugObject, hillsXScale: value });
      });
    guiHillsYScale = gui
      .add(debugObject, "hillsYScale", 0, 20)
      .onChange((value) => {
        setDebugObject({ ...debugObject, hillsYScale: value });
      });
    guiHillsZScale = gui
      .add(debugObject, "hillsZScale", 0, 5)
      .onChange((value) => {
        setDebugObject({ ...debugObject, hillsZScale: value });
      });
    guiHillsXOffset = gui
      .add(debugObject, "hillsXOffset", -100, 100)
      .onChange((value) => {
        setDebugObject({ ...debugObject, hillsXOffset: value });
      });
    guiHillsYOffset = gui
      .add(debugObject, "hillsYOffset", -100, 100)
      .onChange((value) => {
        setDebugObject({ ...debugObject, hillsYOffset: value });
      });

    return () => {
      gui.remove(guiHillsXScale);
      gui.remove(guiHillsYScale);
      gui.remove(guiHillsZScale);
      gui.remove(guiHillsXOffset);
      gui.remove(guiHillsYOffset);
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
        intensity={0.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-near={0.1}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Hills hillsRef={hillsRef} hillsHeight={hillsHeight} />
      <Auroras planeArgs={[200, 100, 100, 100]} position={[0, 20, -50]} />
      <Snow />
      <Tree hillsHeight={hillsHeight} />
      <Forest hillsHeight={hillsHeight} />
    </Canvas>
  );
}
