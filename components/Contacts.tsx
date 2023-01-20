import styles from "../styles/Section.module.css";
import EducationScene from "./LogoTextScene";

const Contacts = () => {
  return (
    <section id="contacts" className={styles.section}>
      <h1 className={styles.heading}>Contacts</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          placeItems: "center",
          width: "50%",
          margin: "0 auto",
        }}
      >
        <EducationScene text="@" />
        <span style={{ flex: 1 }}>contact@raphaelbosi.dev</span>
      </div>
    </section>
  );
};

export default Contacts;
