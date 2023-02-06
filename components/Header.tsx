import styles from "../styles/Home.module.css";
import { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import DiscoverButton from "../components/DiscoverButton";
import { useProgress } from "@react-three/drei";
import { useRef } from "react";
import LaplandScene from "../components/LaplandScene/LaplandScene";
import { motion } from "framer-motion";

const pathCircleVariants = {
  from: {
    opacity: 0,
    pathLength: 0,
  },
  to: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function Loader({ setLoaded }: { setLoaded: any }) {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setLoaded(true);
    }
  }, [progress]);

  return (
    <>
      {progress === 100 ? null : (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            zIndex: 100000,
            backgroundColor: "white",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            visibility: progress === 100 ? "hidden" : "visible",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 1000"
            width={400}
            height={400}
            fill="none"
          >
            <motion.path
              d="M912,600.7c0,26.8-6.2,50.5-18.6,70.9c-12.2,20.1-28.3,34.3-49.4,42.8c-20.7,8.3-50.3,12.5-88.6,12.5L543.2,727
			c0-1.9-0.5-452.5-0.5-454.1c0,0,65.6,0,124.8-0.1c87.4,2.1,146.1-10.3,191.2,27.2c26.7,21.9,40.1,53.4,40.1,94.5
			c0,43.7-18.7,75.9-56,96.5C888.9,508.7,912,545.3,912,600.7z M830.7,672c43-22.4,47.1-91.3,19.7-126.9
			c-21.2-29.1-62.5-21.2-106-22.2l-154.9,0.3l0.1,161.2c35.1-0.8,180.3,2.2,210.3-2.6C810.9,680.2,821.2,676.9,830.7,672z
			 M820.1,462.5c53.9-31.2,47.9-122.6-14.8-139.6c-34.8-11-174.3-4.5-215.7-6.1l0.1,163.6l152.8-0.1c26.3-1.7,34.3-2.9,50-6.4
			C808.1,470.4,811.6,466.9,820.1,462.5z"
              stroke="black"
              strokeWidth="10"
              initial="from"
              animate="to"
              variants={pathCircleVariants}
            />

            <motion.path
              d="M333.9,520.6c66.7-4.8,112.7-53,111.6-122.3c0.2-39.4-14.8-78.3-45.5-100.6c-34.8-23.5-66.2-23.6-114.9-24.6
	c0,0-195.4,0.1-197.2,0.1c0,112.1,0.2,408.6,0.2,454.3h44.7V709c0,0,0.5-11.8,1.1-20.9V523.5h149.6c16.7,30.4,96.9,176,111.8,203
	h53.8L333.9,520.6z M134.7,480.2l-0.1-163.6c34.2,1,177.6-2.8,206.9,2.9c9,1.6,17.3,4.5,25,8.6c1.8,0.9,3.5,2,5.2,3
	c40.9,23.9,41.1,109.8,0.9,134.3c-8.5,5.6-18.2,9.4-29.3,11.5C313.9,483,169,479.1,134.7,480.2z"
              stroke="black"
              strokeWidth="10"
              initial="from"
              animate="to"
              variants={pathCircleVariants}
            />
          </svg>
          <span>{progress.toPrecision(2)} % loaded</span>
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
