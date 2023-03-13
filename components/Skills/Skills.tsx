import { useState } from "react";
import styles from "../../styles/Section.module.scss";
import DataScienceScene from "./DataScienceScene";
import DevelopmentScene from "./DevelopmentScene";
import OthersScene from "./OthersScene";
import SkillsNavbar from "./SkillsNavbar";
import WebDevelopmentScene from "./WebDevelopmentScene";
import { useTranslation } from "next-i18next";

const skillsScenes = [
  DataScienceScene,
  WebDevelopmentScene,
  DevelopmentScene,
  OthersScene,
];

const skillsIds = ["dataScience", "webDevelopment", "development", "design"];

const Skills = () => {
  const [activeScene, setActiveScene] = useState(0);
  const { t } = useTranslation("skills");

  return (
    <>
      <h1 className={styles.skills__heading}>{t("skills")}</h1>
      <SkillsNavbar activeScene={activeScene} />
      <div
        className={styles.skills}
        style={{
          height: "100vh",
          scrollSnapType: "y mandatory",
          scrollMarginTop: "6rem",
          overflowY: "scroll",
          scrollBehavior: "smooth",
        }}
        onScroll={(e) => {
          const scrollY = e.currentTarget.scrollTop;
          const scrollHeight = e.currentTarget.scrollHeight;
          const clientHeight = e.currentTarget.clientHeight;
          const maxScroll = scrollHeight - clientHeight;
          const scrollPercentage = scrollY / maxScroll;
          const sceneIndex = Math.round(
            scrollPercentage * (skillsScenes.length - 1)
          );
          setActiveScene(sceneIndex);
        }}
      >
        {
          // Map the skills
          skillsScenes.map((Scene, index) => {
            return (
              <div
                key={index}
                id={skillsIds[index]}
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
    </>
  );
};

export default Skills;
