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
    <div
      className={styles.skills}
      style={{
        height: "100vh",
        scrollSnapType: "y mandatory",
        scrollMarginTop: "6rem",
        overflowY: "scroll",
      }}
    >
      {/* <h1
        className={styles.heading}
        style={{
          scrollSnapAlign: "start",
        }}
      >
        Skills
      </h1> */}
      {
        // Map the skills
        skillsScenes.map((Scene, index) => {
          return (
            <div
              key={index}
              className={styles.skill}
              style={{
                scrollSnapAlign: "center",
              }}
            >
              <Scene />
            </div>
          );
        })
      }
    </div>
  );
};

export default Skills;
