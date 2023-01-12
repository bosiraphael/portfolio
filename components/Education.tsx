import { Suspense } from "react";
import styles from "../styles/Section.module.css";
import EducationScene from "./EducationScene";

const Education = () => {
  return (
    <section id="education" className={styles.sectionSmall}>
      <h1 className={styles.heading}>Education</h1>
      <div
        style={{
          flex: 1,
          display: "grid",
          gap: "5rem",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(4, 1fr)",
          placeItems: "center",
          margin: "0 5rem",
        }}
      >
        <Suspense fallback={null}>
          <EducationScene />
        </Suspense>
      </div>
    </section>
  );
};

export default Education;
