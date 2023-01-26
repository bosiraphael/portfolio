import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Navbar from "../components/Navbar";
import DiscoverButton from "../components/DiscoverButton";
import Skills from "../components/Skills/Skills";
import Education from "../components/Education";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Work from "../components/Work";
import FPSStats from "react-fps-stats";
import { Preload, View } from "@react-three/drei";
import { useRef } from "react";
import LogoTextScene from "../components/LogoTextScene";
import { Scrollbar } from "smooth-scrollbar-react";

const LaplandScene = dynamic(
  () => import("../components/LaplandScene/LaplandScene"),
  {
    ssr: false,
  }
);

export default function Home() {
  const containerRef = useRef<any>(null);

  const educationViewRef1 = useRef<any>(null);
  const educationViewRef2 = useRef<any>(null);
  const educationViewRef3 = useRef<any>(null);

  const workViewRef1 = useRef<any>(null);
  const workViewRef2 = useRef<any>(null);
  const workViewRef3 = useRef<any>(null);
  const workViewRef4 = useRef<any>(null);

  const contactsViewRef1 = useRef<any>(null);
  const contactsViewRef2 = useRef<any>(null);
  const contactsViewRef3 = useRef<any>(null);

  return (
    <>
      <Head>
        <title>Raphaël Bosi&apos;s Portfolio</title>
        <meta name="description" content="Raphaël Bosi's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main} ref={containerRef}>
        <FPSStats />

        <Canvas
          shadows
          camera={{
            position: [0, 2, 11],
            far: 100,
            near: 0.1,
          }}
          dpr={[1, 1]}
          style={{ width: "100%", height: "100vh" }}
        >
          <color attach="background" args={["#ffffff"]} />

          <Scene />
          <LaplandScene />
        </Canvas>

        <h1 className={styles.heading}>Raphaël Bosi</h1>
        <h2 className={styles.subheading}>Data Scientist and Developer</h2>
        <DiscoverButton />

        <div
          style={{
            position: "absolute",
            top: "100vh",
            width: "100%",
          }}
        >
          <Scrollbar damping={0.1} thumbMinSize={50}>
            <Education
              viewRef1={educationViewRef1}
              viewRef2={educationViewRef2}
              viewRef3={educationViewRef3}
            />

            <Work
              viewRef1={workViewRef1}
              viewRef2={workViewRef2}
              viewRef3={workViewRef3}
              viewRef4={workViewRef4}
            />

            <Skills />

            <Contacts
              viewRef1={contactsViewRef1}
              viewRef2={contactsViewRef2}
              viewRef3={contactsViewRef3}
            />

            <Footer />
          </Scrollbar>
        </div>

        <Suspense fallback={null}>
          <Canvas
            eventSource={containerRef}
            style={{
              position: "fixed !important",
              top: "0px",
              left: "0px",
              width: "100vw !important",
              height: "100vh !important",
            }}
          >
            <View track={educationViewRef1}>
              <LogoTextScene modelPath="models/centraleSupelec.glb" />
            </View>
            <View track={educationViewRef2}>
              <LogoTextScene modelPath="models/chalmers.glb" />
            </View>
            <View track={educationViewRef3}>
              <LogoTextScene text="MPSI - MP*" />
            </View>

            <View track={workViewRef1}>
              <LogoTextScene text="R B" />
            </View>
            <View track={workViewRef2}>
              <LogoTextScene text="BauxRéal" />
            </View>
            <View track={workViewRef3}>
              <LogoTextScene modelPath="models/danone.glb" />
            </View>
            <View track={workViewRef4}>
              <LogoTextScene modelPath="models/safran.glb" />
            </View>

            <View track={contactsViewRef1}>
              <LogoTextScene modelPath="models/email.glb" />
            </View>
            <View track={contactsViewRef2}>
              <LogoTextScene modelPath="models/linkedin.glb" />
            </View>
            <View track={contactsViewRef3}>
              <LogoTextScene modelPath="models/github.glb" />
            </View>

            <Preload all />
          </Canvas>
        </Suspense>
      </main>
    </>
  );
}

const Scene = () => {
  let viewport = useThree((state) => state.viewport);
  useFrame((state, delta) => {
    const offset = window.scrollY / (window.innerHeight * 4);
    if (offset > 1 / 4) {
      return;
    }
    state.camera.position.set(0, 2 - viewport.height * offset, 11);
  });

  return <></>;
};
