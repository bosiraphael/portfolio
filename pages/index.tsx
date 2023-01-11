import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Suspense } from "react";
import Header from "../components/Header";
import dynamic from "next/dynamic";
import { Html, Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Navbar from "../components/Navbar";
import CubeScene from "../components/CubeScene";
import LaplandScene from "../components/LaplandScene/LaplandScene";

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
        >
          <color attach="background" args={["#ffffff"]} />
          <Suspense fallback={null}>
            <ScrollControls pages={2}>
              <Scene />

              <Scroll html style={{ width: "100%" }}>
                <h1 className={styles.heading}>Raphaël Bosi</h1>
                <h2 className={styles.subheading}>
                  Data Scientist and Developer
                </h2>
                <div className={styles.content_container}>
                  <p className={styles.content}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consequuntur provident a maxime ducimus similique
                    repudiandae iste voluptatem distinctio! Officiis eveniet
                    modi, blanditiis maiores quae facilis necessitatibus
                    architecto nam. Ut nisi consequatur officia nesciunt ipsum
                    quae omnis optio explicabo hic?
                  </p>
                </div>
              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas>
      </main>
    </>
  );
}

const Scene = () => {
  const LaplandScene = dynamic(
    () => import("../components/LaplandScene/LaplandScene"),
    {
      ssr: false,
    }
  );
  const scroll = useScroll();
  let viewport = useThree((state) => state.viewport);
  useFrame((state, delta) => {
    const offset = scroll.offset;
    console.log(offset);
    state.camera.position.set(0, 2 - viewport.height * offset, 11);
    //console.log(state.camera.position);
  });

  return (
    <>
      <LaplandScene />
      <CubeScene position={[0, -viewport.height * 1, 0]} />
    </>
  );
};
