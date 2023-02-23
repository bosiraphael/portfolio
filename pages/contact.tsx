import Contacts from "../components/Contacts";
import styles from "../styles/Section.module.css";

const ContactPage = () => {
  return (
    <main
      className={styles.main}
      style={{
        flex: 1,
      }}
    >
      <Contacts />
    </main>
  );
};

export default ContactPage;
