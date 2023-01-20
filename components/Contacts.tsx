import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styles from "../styles/Section.module.css";
import Auroras from "./LaplandScene/Auroras";

import LogoTextScene from "./LogoTextScene";

const Contacts = () => {
  return (
    <section id="contacts" className={styles.section}>
      <h1 className={styles.heading}>Contacts</h1>
      <Canvas
        shadows
        camera={{
          position: [0, 0, 20],
        }}
        style={{ width: "100%", height: "400px" }}
      >
        <color attach="background" args={["#ffffff"]} />

        <Auroras planeArgs={[200, 100, 100, 100]} position={[0, 0, 0]} />

        <Html center>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              placeItems: "center",
              width: "100vw",
              height: 300,
              margin: "0 auto",
            }}
          >
            <a href="" target="_blank" className={styles.contactLink}>
              <h2>Email</h2>
              <LogoTextScene modelPath="models/email.glb" />
            </a>
            <a href="" target="_blank" className={styles.contactLink}>
              <h2>LinkedIn</h2>
              <LogoTextScene modelPath="models/linkedin.glb" />
            </a>
            <a href="" target="_blank" className={styles.contactLink}>
              <h2>Github</h2>

              <LogoTextScene modelPath="models/github.glb" />
            </a>
          </div>
        </Html>
      </Canvas>
    </section>
  );
};

export default Contacts;
