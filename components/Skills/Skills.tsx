import styles from "../../styles/Section.module.css";
import DataScienceScene from "./DataScienceScene";
import DevelopmentScene from "./DevelopmentScene";
import OthersScene from "./OthersScene";
import WebDevelopmentScene from "./WebDevelopmentScene";

const skillsScenes = [
  DataScienceScene,
  WebDevelopmentScene,
  DevelopmentScene,
  OthersScene,
];

const Skills = () => {
  return (
    <section id="skills" className={styles.section}>
      <h1 className={styles.heading}>Skills</h1>
      <div className={styles.skills}>
        {
          // Map the skills
          skillsScenes.map((Scene, index) => {
            return (
              <div key={index} className={styles.skill}>
                <Scene />
              </div>
            );
          })
        }
      </div>
    </section>
  );
};

export default Skills;
