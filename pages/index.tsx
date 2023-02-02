import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills/Skills";
import Education from "../components/Education";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Work from "../components/Work";
import { View } from "@react-three/drei";
import { useRef } from "react";
import LogoTextScene from "../components/LogoTextScene/LogoTextScene";
import { Scrollbar } from "smooth-scrollbar-react";
import Header from "../components/Header";

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
        {/* <FPSStats /> */}

        <Header />

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

        <Canvas
          eventSource={containerRef}
          style={
            {
              position: "fixed !important",
              top: "0px",
              left: "0px",
              width: "100vw !important",
              height: "100vh !important",
            } as any
          }
        >
          <Suspense fallback={null}>
            <View track={educationViewRef1}>
              <LogoTextScene
                modelPath="models/centraleSupelec.glb"
                scale={1.5}
              />
            </View>
            <View track={educationViewRef2}>
              <LogoTextScene modelPath="models/chalmers.glb" />
            </View>
            <View track={educationViewRef3}>
              <LogoTextScene text="MPSI - MP*" scale={2} />
            </View>

            <View track={workViewRef1}>
              <LogoTextScene text="R B" />
            </View>
            <View track={workViewRef2}>
              <LogoTextScene text="BauxRéal" />
            </View>
            <View track={workViewRef3}>
              <LogoTextScene modelPath="models/danone.glb" scale={1.2} />
            </View>
            <View track={workViewRef4}>
              <LogoTextScene modelPath="models/safran.glb" scale={2} />
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
          </Suspense>
        </Canvas>
      </main>
    </>
  );
}
