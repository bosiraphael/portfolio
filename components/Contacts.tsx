import styles from "../styles/Section.module.css";
import LogoTextScene from "./LogoTextScene/LogoTextScene";

const Contacts = () => {
  return (
    <section id="contacts" className={styles.section}>
      <h1 className={styles.heading}>Contacts</h1>
      <div className={styles.contact__container}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            placeItems: "center",
            width: "100%",
            gap: "5rem",
          }}
        >
          <a
            href="mailto:contact@raphaelbosi.dev"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <h2>Email</h2>
            <LogoTextScene modelPath="models/email.glb" />
          </a>
          <a
            href="https://www.linkedin.com/in/rapha%C3%ABl-bosi-8b704a173/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <h2>LinkedIn</h2>
            <LogoTextScene modelPath="models/linkedin.glb" />
          </a>
          <a
            href="https://github.com/bosiraphael"
            target="_blank"
            rel="noopener noreferrer"
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
