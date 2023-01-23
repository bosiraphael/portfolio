import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styles from "../styles/Section.module.css";
import Auroras from "./LaplandScene/Auroras";

import LogoTextScene from "./LogoTextScene";

interface ContactsProps {
  viewRef1: any;
  viewRef2: any;
  viewRef3: any;
}

const Contacts = ({ viewRef1, viewRef2, viewRef3 }: ContactsProps) => {
  return (
    <section id="contacts" className={styles.section}>
      <h1 className={styles.heading}>Contacts</h1>
      <div className={styles.contact__container}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr));",
            placeItems: "center",
            width: "100%",
            gap: "5rem",
          }}
        >
          <a
            href="mailto:contact@raphaelbosi.dev"
            target="_blank"
            className={styles.contactLink}
          >
            <h2>Email</h2>
            <div ref={viewRef1} style={{ width: "100%", height: "100%" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/rapha%C3%ABl-bosi-8b704a173/"
            target="_blank"
            className={styles.contactLink}
          >
            <h2>LinkedIn</h2>
            <div ref={viewRef2} style={{ width: "100%", height: "100%" }} />
          </a>
          <a
            href="https://github.com/bosiraphael"
            target="_blank"
            className={styles.contactLink}
          >
            <h2>Github</h2>

            <div ref={viewRef3} style={{ width: "100%", height: "100%" }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
