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
        <a href="" target="_blank" className={styles.contactLink}>
          <LogoTextScene modelPath="models/email.glb" />
        </a>
        <a href="" target="_blank" className={styles.contactLink}>
          <LogoTextScene modelPath="models/linkedin.glb" />
        </a>
        <a href="" target="_blank" className={styles.contactLink}>
          <LogoTextScene modelPath="models/github.glb" />
        </a>
      </div>
    </section>
  );
};

export default Contacts;
