import styles from "../styles/Section.module.css";
import LogoTextScene from "./LogoTextScene/LogoTextScene";
import Skill from "./Skills/Skill";
import { useTranslation, Trans } from "next-i18next";

const Education = () => {
  const { t } = useTranslation("educationWork");

  return (
    <section id="education" className={styles.section}>
      <h1 className={styles.heading}>Education</h1>

      <div className={styles.gridEducationWork}>
        <div className={styles.educationDate}>
          <p>2018 - 2022</p>
        </div>

        <LogoTextScene modelPath="/models/centralesupelec.glb" scale={2} />
        <Skill
          title="CentraleSupélec"
          description={
            <Trans
              i18nKey="centraleSupelecDescription"
              t={t}
              components={{
                a: (
                  <a
                    style={{
                      pointerEvents: "all",
                      textDecoration: "underline",
                    }}
                  />
                ),
              }}
            />
          }
        />

        <div className={styles.educationDate}>
          <p>2020</p>
        </div>

        <LogoTextScene modelPath="/models/chalmers.glb" scale={1} />
        <Skill
          title="Chalmers University of Technology"
          description="I did an exchange semester at Chalmers University of Technology in Gothenburg, Sweden. I took courses in Computer Science, Biology, Media Compression, and Telecommunications."
        />
        <div className={styles.educationDate}>
          <p>2016-2018</p>
        </div>

        <LogoTextScene text="MPSI - MP*" scale={2} />
        <Skill
          title="MPSI - MP*"
          description="MPSI and MP* are two classes of the French preparatory classes for the Grandes Écoles. I took courses in Mathematics, Physics, Chemistry, and Computer Science."
        />
      </div>
    </section>
  );
};

export default Education;
