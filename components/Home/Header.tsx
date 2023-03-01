import styles from "../../styles/Home.module.scss";
import { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import DiscoverButton from "./DiscoverButton";
import { useRef } from "react";
import LaplandScene from "../LaplandScene/LaplandScene";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { Loader, Preload } from "@react-three/drei";

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
        <motion.h1
          className={styles.heading}
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
          Raphaël Bosi
        </motion.h1>
        <motion.h2
          className={styles.subheading}
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
          {t("header.subheading")}
        </motion.h2>

        <DiscoverButton />
      </div>
    </header>
  );
};

export default Header;
