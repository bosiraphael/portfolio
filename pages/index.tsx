import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Suspense } from "react";
import Header from "../components/Header";
import dynamic from "next/dynamic";
import { Html, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Navbar from "../components/Navbar";

export default function Home() {
  const LaplandScene = dynamic(
    () => import("../components/LaplandScene/LaplandScene"),
    {
      ssr: false,
    }
  );
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
        <Suspense fallback={null}>
          <Canvas
            shadows
            className={styles.canvas}
            camera={{
              position: [0, 2, 11],
            }}
          >
            <color attach="background" args={["#ffffff"]} />
            <ScrollControls pages={2} damping={5}>
              <Scroll>
                <LaplandScene />
              </Scroll>
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
          </Canvas>
        </Suspense>
      </main>
    </>
  );
}
