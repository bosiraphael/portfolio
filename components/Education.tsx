import dynamic from "next/dynamic";
import { Suspense } from "react";
import styles from "../styles/Section.module.css";

const EducationScene = dynamic(() => import("./EducationScene"), {
  ssr: false,
});
const Education = () => {
  return (
    <section id="education" className={styles.sectionSmall}>
      <h1 className={styles.heading}>Education</h1>

      <Suspense fallback={null}>
        <EducationScene />
      </Suspense>
    </section>
  );
};

export default Education;
