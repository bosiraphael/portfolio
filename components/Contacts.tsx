import styles from "../styles/Section.module.css";
import LogoTextScene from "./LogoTextScene";

const Contacts = () => {
  return (
    <section id="contacts" className={styles.section}>
      <h1 className={styles.heading}>Contacts</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          placeItems: "center",
          width: "100%",
          height: 300,
          margin: "0 auto",
        }}
      >
        <LogoTextScene modelPath="models/email.glb" />
        <LogoTextScene modelPath="models/linkedin.glb" />
        <LogoTextScene modelPath="models/github.glb" />
      </div>
    </section>
  );
};

export default Contacts;
