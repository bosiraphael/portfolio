import styles from "../styles/Home.module.css";
import { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import DiscoverButton from "../components/DiscoverButton";
import { useProgress } from "@react-three/drei";
import { useRef } from "react";
import LaplandScene from "../components/LaplandScene/LaplandScene";
import { motion } from "framer-motion";

function Loader({ setLoaded }: { setLoaded: any }) {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setLoaded(true);
    }
  }, [progress]);
  console.log(progress);

  return (
    <>
      {progress === 100 ? null : (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            zIndex: 2000,
            backgroundColor: "white",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "5rem",
            visibility: progress === 100 ? "hidden" : "visible",
          }}
        >
          {progress.toPrecision(2)} % loaded
        </div>
      )}
    </>
  );
}

const Scene = () => {
  let { viewport, camera } = useThree();

  // Set event listener for scrolling
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const offset = window.scrollY / (window.innerHeight * 4);
      if (offset < 1 / 4) {
        camera.position.set(0, 2 - viewport.height * offset, 11);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [camera.position, viewport.height]);

  return <></>;
};

const LaplandCanvas = ({ headerRef }) => {
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
      </Suspense>
    </Canvas>
  );
};

const Header = () => {
  const headerRef = useRef<any>(null);

  const [loaded, setLoaded] = useState(false);

  return (
    <header ref={headerRef}>
      <Loader setLoaded={setLoaded} />

      <LaplandCanvas headerRef={headerRef} />

      <motion.div className={styles.header}>
        <motion.h1
          className={styles.heading}
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
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
          animate={loaded ? "visible" : "hidden"}
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
          Data Scientist and Developer
        </motion.h2>

        <DiscoverButton loaded={loaded} />
      </motion.div>
    </header>
  );
};

export default Header;
