import styles from "../../styles/Home.module.scss";
import { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import DiscoverButton from "./DiscoverButton";
import { useRef } from "react";
import LaplandScene from "../LaplandScene/LaplandScene";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { Preload } from "@react-three/drei";
import Typewriter from "typewriter-effect";

const Scene = () => {
  let { viewport, camera } = useThree();

  const listener = () => {
    const offset = window.scrollY / (window.innerHeight * 3);
    if (offset < 1 / 3) {
      camera.position.set(0, 2 - viewport.height * offset, 11);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [viewport.height]);

  return <></>;
};

const LaplandCanvas = ({ headerRef }: { headerRef: any }) => {
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 2, 11],
        far: 100,
        near: 0.1,
      }}
      dpr={[1, 1]}
      style={{ width: "100%", height: "100vh" }}
      eventSource={headerRef}
    >
      <color attach="background" args={["#ffffff"]} />

      <Suspense fallback={null}>
        <Scene />

        <LaplandScene />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

const Header = () => {
  const { t } = useTranslation("common");

  const headerRef = useRef<any>(null);

  return (
    <header ref={headerRef}>
      <LaplandCanvas headerRef={headerRef} />

      <div className={styles.header}>
        <div
          style={{
            fontSize: "5rem",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            textAlign: "center",
            color: "white",
            textShadow: "0 0 10px rgba(255,255,255,0.5)",
            width: "100%",
          }}
        >
          <Typewriter
            options={{
              strings: ["Hello", "World"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 1fr 5fr",
            alignItems: "center",
            padding: "0 10rem",
            width: "100%",
            height: "20%",
            position: "absolute",
            bottom: 0,
            textShadow: "0 0 10px rgba(255,255,255,0.5)",
          }}
        >
          <motion.h1
            className={styles.heading}
            style={{
              justifySelf: "start",
            }}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.5,
                  duration: 0.5,
                  default: { ease: "easeInOut" },
                },
              },
              hidden: {
                opacity: 0,
                y: 20,
              },
            }}
          >
            RAPHAEL BOSI
          </motion.h1>
          <DiscoverButton />

          <motion.h2
            className={styles.subheading}
            style={{
              justifySelf: "end",
            }}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.7,
                  duration: 0.5,
                  default: { ease: "easeInOut" },
                },
              },
              hidden: {
                opacity: 0,
                y: 20,
              },
            }}
          >
            {t("header.subheading").toUpperCase()}
          </motion.h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
