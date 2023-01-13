import dynamic from "next/dynamic";
import { Suspense } from "react";
import styles from "../styles/Section.module.css";
import Skill from "./Skill";
import EducationScene from "./EducationScene";

const Education = () => {
  return (
    <section
      id="education"
      className={styles.sectionLarge}
      style={{
        top: "100vh",
      }}
    >
      <h1 className={styles.heading}>Education</h1>

      <div
        style={{
          flex: 1,
          display: "grid",
          gap: "5rem",
          gridTemplateColumns: "1fr 3fr 3fr",
          gridTemplateRows: "1fr 1fr 1fr",
          placeItems: "center",
          margin: "0 5rem",
        }}
      >
        <div className="education-date">
          <p>2018 - 2022</p>
        </div>

        <EducationScene modelPath="models/centraleSupelec.glb" />
        <Skill
          title="CentraleSupélec"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero repellat facere fuga sed alias doloribus vitae recusandae quas assumenda optio aspernatur obcaecati delectus ducimus nobis sapiente eligendi libero eum, explicabo dolore voluptas nulla praesentium. Sunt deleniti assumenda impedit fugiat atque eveniet aut! Aliquid necessitatibus incidunt dolore libero reiciendis aut! Maiores non rerum maxime laborum, perspiciatis iste ipsam sapiente commodi ab. Asperiores, maxime, consectetur, optio quae iste delectus fugiat beatae aspernatur veritatis est odit pariatur sequi iusto minima suscipit facere dolores libero similique maiores. Mollitia, quisquam! Fuga, voluptatibus! Reprehenderit animi natus ullam quod placeat tempore quas numquam nam temporibus excepturi!"
        />
        <div className="education-date">
          <p>2020</p>
        </div>

        <EducationScene modelPath="models/chalmers.glb" />
        <Skill
          title="Chalmers University of Technology"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est asperiores ipsa, distinctio perspiciatis excepturi mollitia in neque qui sequi sit, repudiandae nostrum odit dolore vero velit iste recusandae iure. Consectetur voluptatum nihil corrupti fuga molestiae totam natus ipsum labore, quidem dignissimos alias facere nisi. Molestias tempora quam quisquam ab aperiam, expedita qui beatae in incidunt, sequi molestiae. Aut quo, neque excepturi vitae sunt illo architecto vero voluptatibus perspiciatis illum harum consectetur ex. Tempora facilis, praesentium fuga sapiente vitae beatae tenetur hic porro harum! Modi, non, fugiat aspernatur sequi animi cum id nam labore natus ipsam optio consectetur minus, corporis aliquid."
        />
        <div className="education-date">
          <p>2016-2018</p>
        </div>
        <EducationScene text="MPSI - MP*" />
        <Skill
          title="MPSI - MP*"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est asperiores ipsa, distinctio perspiciatis excepturi mollitia in neque qui sequi sit, repudiandae nostrum odit dolore vero velit iste recusandae iure. Consectetur voluptatum nihil corrupti fuga molestiae totam natus ipsum labore, quidem dignissimos alias facere nisi. Molestias tempora quam quisquam ab aperiam, expedita qui beatae in incidunt, sequi molestiae. Aut quo, neque excepturi vitae sunt illo architecto vero voluptatibus perspiciatis illum harum consectetur ex. Tempora facilis, praesentium fuga sapiente vitae beatae tenetur hic porro harum! Modi, non, fugiat aspernatur sequi animi cum id nam labore natus ipsam optio consectetur minus, corporis aliquid."
        />
      </div>
    </section>
  );
};

export default Education;
