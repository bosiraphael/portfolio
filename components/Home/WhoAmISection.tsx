import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import MacBookPro from "./MacBookPro";
import { Preload } from "@react-three/drei";
import Auroras from "../LaplandScene/Auroras";
import styles from "../../styles/Home.module.scss";
import useMediaQuery from "@mui/material/useMediaQuery";

const WhoAmISection = () => {
  const containerRef = useRef<any>(null);

  const isMobile = useMediaQuery("(max-width:1024px)");

  const macBookPosition: [number, number, number] = isMobile
    ? [0, -1.2, -1]
    : [3, 0, 0];

  const macBookScale: [number, number, number] = isMobile
    ? [0.5, 0.5, 0.5]
    : [1, 1, 1];

  const macBookRotation: [number, number, number] = isMobile
    ? [0.1, -0.2, 0]
    : [0.25, -1, 0];

  return (
    <div ref={containerRef} className={styles.sectionContainer}>
      <div className={styles.whoAmISection}>
        <h1
          className={styles.sectionTitle}
          style={{
            marginBottom: "2rem",
          }}
        >
          Who am I?
        </h1>
        <p className={styles.sectionText}>
          I'm a french 24 years old freelance frontend developer based near
          Paris. I'm passionate about Web Development and AI. I graduated from{" "}
          <a
            href="https://www.centralesupelec.fr/en/"
            style={{
              pointerEvents: "all",
              color: "white",
              textDecoration: "underline",
            }}
          >
            CentraleSupélec
          </a>{" "}
          in 2022 with a master's degree with a specialization in artificial
          intelligence. You can find more details about my education on the{" "}
          <a
            href="/education-work"
            style={{
              pointerEvents: "all",
              color: "white",
              textDecoration: "underline",
            }}
          >
            education page
          </a>
          . I'm specialized in React, Next.js, Three.js and Python, but you can
          see all my other skills on the{" "}
          <a
            href="/skills"
            style={{
              pointerEvents: "all",
              color: "white",
              textDecoration: "underline",
            }}
          >
            skills page
          </a>
          .
        </p>
      </div>
      <Canvas
        camera={{
          fov: 45,
          position: [0, 0, 10],
          near: 0.1,
          far: 100,
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <MacBookPro
            position={macBookPosition}
            scale={macBookScale}
            rotation={macBookRotation}
          />
          <Auroras planeArgs={[100, 20, 1, 1]} position={[0, 0, -5]} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default WhoAmISection;
