import { Suspense } from "react";
import styles from "../styles/Section.module.css";
import CubeScene from "./CubeScene";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section
      id="skills"
      className={styles.sectionLarge}
      style={{ top: "200vh" }}
    >
      <h1 className={styles.heading}>Skills</h1>
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
        <Suspense fallback={<div />}>
          <CubeScene />
        </Suspense>
        <Skill
          title="Data Science"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est asperiores ipsa, distinctio perspiciatis excepturi mollitia in neque qui sequi sit, repudiandae nostrum odit dolore vero velit iste recusandae iure. Consectetur voluptatum nihil corrupti fuga molestiae totam natus ipsum labore, quidem dignissimos alias facere nisi. Molestias tempora quam quisquam ab aperiam, expedita qui beatae in incidunt, sequi molestiae. Aut quo, neque excepturi vitae sunt illo architecto vero voluptatibus perspiciatis illum harum consectetur ex. Tempora facilis, praesentium fuga sapiente vitae beatae tenetur hic porro harum! Modi, non, fugiat aspernatur sequi animi cum id nam labore natus ipsam optio consectetur minus, corporis aliquid."
        />
        <Skill
          title="Web Development"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est asperiores ipsa, distinctio perspiciatis excepturi mollitia in neque qui sequi sit, repudiandae nostrum odit dolore vero velit iste recusandae iure. Consectetur voluptatum nihil corrupti fuga molestiae totam natus ipsum labore, quidem dignissimos alias facere nisi. Molestias tempora quam quisquam ab aperiam, expedita qui beatae in incidunt, sequi molestiae. Aut quo, neque excepturi vitae sunt illo architecto vero voluptatibus perspiciatis illum harum consectetur ex. Tempora facilis, praesentium fuga sapiente vitae beatae tenetur hic porro harum! Modi, non, fugiat aspernatur sequi animi cum id nam labore natus ipsam optio consectetur minus, corporis aliquid."
        />
        <Suspense fallback={<div />}>
          <CubeScene />
        </Suspense>
        <Suspense fallback={<div />}>
          <CubeScene />
        </Suspense>
        <Skill
          title="Development"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est asperiores ipsa, distinctio perspiciatis excepturi mollitia in neque qui sequi sit, repudiandae nostrum odit dolore vero velit iste recusandae iure. Consectetur voluptatum nihil corrupti fuga molestiae totam natus ipsum labore, quidem dignissimos alias facere nisi. Molestias tempora quam quisquam ab aperiam, expedita qui beatae in incidunt, sequi molestiae. Aut quo, neque excepturi vitae sunt illo architecto vero voluptatibus perspiciatis illum harum consectetur ex. Tempora facilis, praesentium fuga sapiente vitae beatae tenetur hic porro harum! Modi, non, fugiat aspernatur sequi animi cum id nam labore natus ipsam optio consectetur minus, corporis aliquid."
        />
        <Skill
          title="Others"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est asperiores ipsa, distinctio perspiciatis excepturi mollitia in neque qui sequi sit, repudiandae nostrum odit dolore vero velit iste recusandae iure. Consectetur voluptatum nihil corrupti fuga molestiae totam natus ipsum labore, quidem dignissimos alias facere nisi. Molestias tempora quam quisquam ab aperiam, expedita qui beatae in incidunt, sequi molestiae. Aut quo, neque excepturi vitae sunt illo architecto vero voluptatibus perspiciatis illum harum consectetur ex. Tempora facilis, praesentium fuga sapiente vitae beatae tenetur hic porro harum! Modi, non, fugiat aspernatur sequi animi cum id nam labore natus ipsam optio consectetur minus, corporis aliquid."
        />
        <Suspense fallback={<div />}>
          <CubeScene />
        </Suspense>
      </div>
    </section>
  );
};

export default Skills;
