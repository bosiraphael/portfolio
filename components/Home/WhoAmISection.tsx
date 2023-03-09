import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import MacBookPro from "./MacBookPro";
import { Preload } from "@react-three/drei";
import Auroras from "../LaplandScene/Auroras";
import styles from "../../styles/Home.module.scss";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Trans, useTranslation } from "next-i18next";
import { motion } from "framer-motion";

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
        <motion.h1
          className={styles.sectionTitle}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {t("whoAmI")}
        </motion.h1>
        <motion.p
          className={styles.sectionText}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
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
        </motion.p>
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
