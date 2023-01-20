import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styles from "../styles/Section.module.css";
import Auroras from "./LaplandScene/Auroras";

import LogoTextScene from "./LogoTextScene";

const Contacts = () => {
  return (
    <section id="contacts" className={styles.section}>
      <h1 className={styles.heading}>Contacts</h1>
      <div
        style={{
          position: "relative",
          display: "flex",
          height: "70rem",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Canvas
          shadows
          camera={{
            position: [0, 0, 20],
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "70rem",
          }}
        >
          <color attach="background" args={["#ffffff"]} />

          <Auroras planeArgs={[200, 100, 100, 100]} position={[0, 0, 0]} />
        </Canvas>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr));",
            placeItems: "center",
            width: "90%",
            gap: "5rem",
          }}
        >
          <a
            href="mailto:contact@raphaelbosi.dev"
            target="_blank"
            className={styles.contactLink}
          >
            <h2>Email</h2>
            <LogoTextScene modelPath="models/email.glb" />
          </a>
          <a
            href="https://www.linkedin.com/in/rapha%C3%ABl-bosi-8b704a173/"
            target="_blank"
            className={styles.contactLink}
          >
            <h2>LinkedIn</h2>
            <LogoTextScene modelPath="models/linkedin.glb" />
          </a>
          <a
            href="https://github.com/bosiraphael"
            target="_blank"
            className={styles.contactLink}
          >
            <h2>Github</h2>

            <LogoTextScene modelPath="models/github.glb" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
