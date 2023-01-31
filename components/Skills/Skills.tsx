import { Fragment } from "react";
import styles from "../../styles/Section.module.css";
import DataScienceScene from "./DataScienceScene";
import DevelopmentScene from "./DevelopmentScene";
import OthersScene from "./OthersScene";
import Skill from "./Skill";
import WebDevelopmentScene from "./WebDevelopmentScene";

const skillsScenes = [
  DataScienceScene,
  WebDevelopmentScene,
  DevelopmentScene,
  OthersScene,
];

const skillsTitles = [
  "Data Science",
  "Web Development",
  "Development",
  "Others",
];

const skillsDescriptions = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est asperiores ipsa, distinctio perspiciatis excepturi mollitia in neque qui sequi sit, repudiandae nostrum odit dolore vero velit iste recusandae iure. Consectetur voluptatum nihil corrupti fuga molestiae totam natus ipsum labore, quidem dignissimos alias facere nisi. Molestias tempora quam quisquam ab aperiam, expedita qui beatae in incidunt, sequi molestiae. Aut quo, neque excepturi vitae sunt illo architecto vero voluptatibus perspiciatis illum harum consectetur ex. Tempora facilis, praesentium fuga sapiente vitae beatae tenetur hic porro harum! Modi, non, fugiat aspernatur sequi animi cum id nam labore natus ipsam optio consectetur minus, corporis aliquid.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est asperiores ipsa, distinctio perspiciatis excepturi mollitia in neque qui sequi sit, repudiandae nostrum odit dolore vero velit iste recusandae iure. Consectetur voluptatum nihil corrupti fuga molestiae totam natus ipsum labore, quidem dignissimos alias facere nisi. Molestias tempora quam quisquam ab aperiam, expedita qui beatae in incidunt, sequi molestiae. Aut quo, neque excepturi vitae sunt illo architecto vero voluptatibus perspiciatis illum harum consectetur ex. Tempora facilis, praesentium fuga sapiente vitae beatae tenetur hic porro harum! Modi, non, fugiat aspernatur sequi animi cum id nam labore natus ipsam optio consectetur minus, corporis aliquid.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est asperiores ipsa, distinctio perspiciatis excepturi mollitia in neque qui sequi sit, repudiandae nostrum odit dolore vero velit iste recusandae iure. Consectetur voluptatum nihil corrupti fuga molestiae totam natus ipsum labore, quidem dignissimos alias facere nisi. Molestias tempora quam quisquam ab aperiam, expedita qui beatae in incidunt, sequi molestiae. Aut quo, neque excepturi vitae sunt illo architecto vero voluptatibus perspiciatis illum harum consectetur ex. Tempora facilis, praesentium fuga sapiente vitae beatae tenetur hic porro harum! Modi, non, fugiat aspernatur sequi animi cum id nam labore natus ipsam optio consectetur minus, corporis aliquid.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est asperiores ipsa, distinctio perspiciatis excepturi mollitia in neque qui sequi sit, repudiandae nostrum odit dolore vero velit iste recusandae iure. Consectetur voluptatum nihil corrupti fuga molestiae totam natus ipsum labore, quidem dignissimos alias facere nisi. Molestias tempora quam quisquam ab aperiam, expedita qui beatae in incidunt, sequi molestiae. Aut quo, neque excepturi vitae sunt illo architecto vero voluptatibus perspiciatis illum harum consectetur ex. Tempora facilis, praesentium fuga sapiente vitae beatae tenetur hic porro harum! Modi, non, fugiat aspernatur sequi animi cum id nam labore natus ipsam optio consectetur minus, corporis aliquid.",
];

const Skills = () => {
  return (
    <section id="skills" className={styles.section}>
      <h1 className={styles.heading}>Skills</h1>
      <div className={styles.gridSkills} style={{ gridTemplateRows: "1fr" }}>
        {
          // Map the skills
          skillsScenes.map((Scene, index) => {
            return (
              <Fragment key={index}>
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    gridArea: `skillScene${index + 1}`,
                  }}
                >
                  <Scene />
                </div>
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    gridArea: `skill${index + 1}`,
                  }}
                >
                  <Skill
                    title={skillsTitles[index]}
                    description={skillsDescriptions[index]}
                  />
                </div>
              </Fragment>
            );
          })
        }
      </div>
    </section>
  );
};

export default Skills;
