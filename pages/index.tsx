import Head from "next/head";
import styles from "../styles/Home.module.css";
import { createRef, Suspense } from "react";
import dynamic from "next/dynamic";
import { Html, Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Navbar from "../components/Navbar";
import DiscoverButton from "../components/DiscoverButton";
import Skills from "../components/Skills";
import Education from "../components/Education";

const LaplandScene = dynamic(
  () => import("../components/LaplandScene/LaplandScene"),
  {
    ssr: false,
  }
);
const CubeScene = dynamic(() => import("../components/CubeScene"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Raphaël Bosi&apos;s Portfolio</title>
        <meta name="description" content="Raphaël Bosi's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Canvas
          shadows
          camera={{
            position: [0, 2, 11],
          }}
          style={{ width: "100%", height: "100vh" }}
        >
          <color attach="background" args={["#ffffff"]} />
          <Suspense fallback={null}>
            <Scene />
            <LaplandScene />
          </Suspense>
        </Canvas>
        <h1 className={styles.heading}>Raphaël Bosi</h1>
        <h2 className={styles.subheading}>Data Scientist and Developer</h2>
        <DiscoverButton />

        <Education />
        <Skills />
      </main>
    </>
  );
}

const Scene = () => {
  let viewport = useThree((state) => state.viewport);
  useFrame((state, delta) => {
    const offset = window.scrollY / (window.innerHeight * 2);
    state.camera.position.set(0, 2 - viewport.height * offset, 11);
  });

  return <></>;
};
