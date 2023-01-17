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
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius consequatur doloremque fugit expedita eos numquam dolores suscipit et facilis. Saepe accusamus optio doloribus nesciunt? Quam voluptate pariatur, itaque illo exercitationem temporibus rerum accusantium praesentium sapiente nisi qui recusandae odit sed quidem deleniti dicta explicabo quisquam vitae ipsam id fugit."
        />

        <div className="education-date">
          <p>2020</p>
        </div>

        <EducationScene modelPath="models/chalmers.glb" />
        <Skill
          title="Chalmers University of Technology"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius consequatur doloremque fugit expedita eos numquam dolores suscipit et facilis. Saepe accusamus optio doloribus nesciunt? Quam voluptate pariatur, itaque illo exercitationem temporibus rerum accusantium praesentium sapiente nisi qui recusandae odit sed quidem deleniti dicta explicabo quisquam vitae ipsam id fugit."
        />
        <div className="education-date">
          <p>2016-2018</p>
        </div>
        <EducationScene text="MPSI - MP*" />
        <Skill
          title="MPSI - MP*"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius consequatur doloremque fugit expedita eos numquam dolores suscipit et facilis. Saepe accusamus optio doloribus nesciunt? Quam voluptate pariatur, itaque illo exercitationem temporibus rerum accusantium praesentium sapiente nisi qui recusandae odit sed quidem deleniti dicta explicabo quisquam vitae ipsam id fugit."
        />
      </div>
    </section>
  );
};

export default Education;
