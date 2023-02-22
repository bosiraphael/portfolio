import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import MacBookPro from "./MacBookPro";
import { Html } from "@react-three/drei";
import Auroras from "../LaplandScene/Auroras";
import styles from "../../styles/Home.module.css";

const WhoAmISection = () => {
  const containerRef = useRef<any>(null);
  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100vh", position: "relative" }}
    >
      <Suspense fallback={null}>
        <Canvas
          camera={{
            fov: 45,
            position: [0, 0, 10],
            near: 0.1,
            far: 100,
          }}
        >
          <Html
            style={{
              width: "100vw",
              height: "100vh",
            }}
            center
            zIndexRange={[100, 0]}
          >
            <div
              style={{
                width: "50%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0 5%",
                color: "white",
                background: "rgba(0, 0, 0, 0.5)",
                pointerEvents: "none",
              }}
            >
              <h1
                className={styles.sectionTitle}
                style={{
                  marginBottom: "2rem",
                }}
              >
                Who am I?
              </h1>
              <p className={styles.sectionText}>
                I'm a french 24 years old freelance frontend developer based
                near Paris. I'm passionate about Web Development and AI. I
                graduated from{" "}
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
                in 2022 with a master's degree with a specialization in
                artificial intelligence. You can find more details about my
                education on the{" "}
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
                . I'm specialized in React, Next.js, Three.js and Python, but
                you can see all my other skills on the{" "}
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
          </Html>
          <ambientLight intensity={1} />
          <MacBookPro position={[3, -1, 0]} />
          <Auroras planeArgs={[100, 20, 1, 1]} position={[0, 0, -5]} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default WhoAmISection;
