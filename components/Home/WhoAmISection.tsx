import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import MacBookPro from "./MacBookPro";
import { Preload } from "@react-three/drei";
import Auroras from "../LaplandScene/Auroras";
import styles from "../../styles/Home.module.scss";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Trans, useTranslation } from "next-i18next";

const WhoAmISection = () => {
  const containerRef = useRef<any>(null);
  const { t } = useTranslation("home");

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
        <h1 className={styles.sectionTitle}>{t("whoAmI")}</h1>
        <p className={styles.sectionText}>
          <Trans
            i18nKey="whoAmIText"
            t={t}
            components={{
              a: (
                <a
                  style={{
                    pointerEvents: "all",
                    color: "white",
                    textDecoration: "underline",
                  }}
                />
              ),
            }}
          />
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
