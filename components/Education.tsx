import dynamic from "next/dynamic";
import { Suspense } from "react";
import styles from "../styles/Section.module.css";
import Skill from "./Skill";

const EducationScene = dynamic(() => import("./EducationScene"), {
  ssr: false,
});
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
          gridTemplateRows: "repeat(2, 1fr)",
          placeItems: "center",
          margin: "0 5rem",
        }}
      >
        <EducationScene modelPath="models/centraleSupelec.glb" />

        <Skill
          title="CentraleSupelec"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est asperiores ipsa, distinctio perspiciatis excepturi mollitia in neque qui sequi sit, repudiandae nostrum odit dolore vero velit iste recusandae iure. Consectetur voluptatum nihil corrupti fuga molestiae totam natus ipsum labore, quidem dignissimos alias facere nisi. Molestias tempora quam quisquam ab aperiam, expedita qui beatae in incidunt, sequi molestiae. Aut quo, neque excepturi vitae sunt illo architecto vero voluptatibus perspiciatis illum harum consectetur ex. Tempora facilis, praesentium fuga sapiente vitae beatae tenetur hic porro harum! Modi, non, fugiat aspernatur sequi animi cum id nam labore natus ipsam optio consectetur minus, corporis aliquid."
        />

        <EducationScene modelPath="models/chalmers.glb" />

        <Skill
          title="Chalmers University of Technology"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est asperiores ipsa, distinctio perspiciatis excepturi mollitia in neque qui sequi sit, repudiandae nostrum odit dolore vero velit iste recusandae iure. Consectetur voluptatum nihil corrupti fuga molestiae totam natus ipsum labore, quidem dignissimos alias facere nisi. Molestias tempora quam quisquam ab aperiam, expedita qui beatae in incidunt, sequi molestiae. Aut quo, neque excepturi vitae sunt illo architecto vero voluptatibus perspiciatis illum harum consectetur ex. Tempora facilis, praesentium fuga sapiente vitae beatae tenetur hic porro harum! Modi, non, fugiat aspernatur sequi animi cum id nam labore natus ipsam optio consectetur minus, corporis aliquid."
        />
      </div>
    </section>
  );
};

export default Education;
