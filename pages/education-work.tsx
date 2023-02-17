import Education from "../components/Education";
import Work from "../components/Work";
import styles from "../styles/Section.module.css";

const EducationWorkPage = () => {
  return (
    <main className={styles.main}>
      <Education />
      <Work />
    </main>
  );
};

export default EducationWorkPage;
