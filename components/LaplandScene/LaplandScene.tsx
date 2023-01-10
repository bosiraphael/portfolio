import { Canvas, useFrame, useThree } from "@react-three/fiber";
import styles from "../../styles/Home.module.css";
import { createRef, useEffect, useRef, useState } from "react";
import { Color, Mesh } from "three";
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
import { OrbitControls, useScroll } from "@react-three/drei";
import { clamp } from "three/src/math/MathUtils";

//const gui = new dat.GUI();

type Props = {};

export default function LaplandScene({}: Props) {
  // let guiHillsXScale: dat.GUIController,
  //   guiHillsYScale: dat.GUIController,
  //   guiHillsZScale: dat.GUIController,
  //   guiHillsXOffset: dat.GUIController,
  //   guiHillsYOffset: dat.GUIController;
  const hillsRef = createRef<Mesh>();

  const groupRef = useRef<any>();
  const data = useScroll();

  useFrame(() => {
    if (data.range(0, 1 / 2) === 1) {
      groupRef.current.position.y = 100;
    } else {
      groupRef.current.position.y = 0;
    }
  });

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
      ) *
      debugObject.hillsZScale *
      clamp((y - 10) * 0.5, 0, 1)
    );
  };

  // useEffect(() => {
  //   guiHillsXScale = gui
  //     .add(debugObject, "hillsXScale", 0, 20)
  //     .onChange((value) => {
  //       setDebugObject({ ...debugObject, hillsXScale: value });
  //     });
  //   guiHillsYScale = gui
  //     .add(debugObject, "hillsYScale", 0, 20)
  //     .onChange((value) => {
  //       setDebugObject({ ...debugObject, hillsYScale: value });
  //     });
  //   guiHillsZScale = gui
  //     .add(debugObject, "hillsZScale", 0, 5)
  //     .onChange((value) => {
  //       setDebugObject({ ...debugObject, hillsZScale: value });
  //     });
  //   guiHillsXOffset = gui
  //     .add(debugObject, "hillsXOffset", -100, 100)
  //     .onChange((value) => {
  //       setDebugObject({ ...debugObject, hillsXOffset: value });
  //     });
  //   guiHillsYOffset = gui
  //     .add(debugObject, "hillsYOffset", -100, 100)
  //     .onChange((value) => {
  //       setDebugObject({ ...debugObject, hillsYOffset: value });
  //     });

  //   return () => {
  //     gui.remove(guiHillsXScale);
  //     gui.remove(guiHillsYScale);
  //     gui.remove(guiHillsZScale);
  //     gui.remove(guiHillsXOffset);
  //     gui.remove(guiHillsYOffset);
  //   };
  // }, []);

  return (
    <group ref={groupRef}>
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.1} />
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
        <meshBasicMaterial color={new Color("white")} />
      </mesh>
      <Hills hillsRef={hillsRef} hillsHeight={hillsHeight} />
      <Auroras planeArgs={[500, 100, 100, 100]} position={[0, 20, -50]} />
      <Snow />
      <Trees hillsHeight={hillsHeight} />
      <Forest hillsHeight={hillsHeight} />
      <Moose hillsHeight={hillsHeight} />
    </group>
  );
}
