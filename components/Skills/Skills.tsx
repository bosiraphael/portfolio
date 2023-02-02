import { Fragment, useRef } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
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
