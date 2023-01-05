import { Canvas, useThree } from "@react-three/fiber";
import styles from "../../styles/Home.module.css";
import { createRef, useEffect, useState } from "react";
import { Color, Mesh } from "three";
import { OrbitControls } from "@react-three/drei";
import * as dat from "dat.gui";
import Hills from "./Hills";
import Auroras from "./Auroras";

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
    hillsXScale: 10,
    hillsYScale: 10,
    hillsZScale: 1,
    hillsXOffset: 0,
    hillsYOffset: 0,
  });
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
      {/* <Hills
        hillsRef={hillsRef}
        hillsXScale={debugObject.hillsXScale}
        hillsYScale={debugObject.hillsYScale}
        hillsZScale={debugObject.hillsZScale}
        hillsXOffset={debugObject.hillsXOffset}
        hillsYOffset={debugObject.hillsYOffset}
      /> */}
      <Auroras />
    </Canvas>
  );
}