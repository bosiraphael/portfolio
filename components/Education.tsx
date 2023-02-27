import styles from "../styles/Section.module.css";
import LogoTextScene from "./LogoTextScene/LogoTextScene";
import Skill from "./Skills/Skill";

const Education = () => {
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
            <>
              I graduated from CentraleSupélec in 2022 with a Master's degree in
              Engineering. I specialized in Artificial Intelligence and Machine
              Learning. The last year I took an Entrepreneurship class with the
              goal of creating my company. I also took courses in Computer
              Vision, Data Science, Software Engineering. You can see a list of
              all the courses I took on my{" "}
              <a
                href="https://www.linkedin.com/in/rapha%C3%ABl-bosi-8b704a173/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "underline",
                }}
              >
                LinkedIn
              </a>
              .
            </>
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
