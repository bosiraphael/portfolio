import styles from "../styles/Section.module.css";
import Skill from "./Skill";

interface EducationProps {
  educationViewRef1: any;
  educationViewRef2: any;
  educationViewRef3: any;
}

const Education = ({
  educationViewRef1,
  educationViewRef2,
  educationViewRef3,
}: EducationProps) => {
  return (
    <section id="education" className={styles.section}>
      <h1 className={styles.heading}>Education</h1>

      <div
        style={{
          flex: 1,
          display: "grid",
          gap: "5rem",
          gridTemplateColumns: "1fr 3fr 3fr",
          gridTemplateRows: "1fr 1fr 1fr",
          placeItems: "center",
        }}
      >
        <div className="education-date">
          <p>2018 - 2022</p>
        </div>

        <div
          ref={educationViewRef1}
          style={{ width: "100%", height: "100%" }}
        />
        <Skill
          title="CentraleSupélec"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius consequatur doloremque fugit expedita eos numquam dolores suscipit et facilis. Saepe accusamus optio doloribus nesciunt? Quam voluptate pariatur, itaque illo exercitationem temporibus rerum accusantium praesentium sapiente nisi qui recusandae odit sed quidem deleniti dicta explicabo quisquam vitae ipsam id fugit."
        />

        <div className="education-date">
          <p>2020</p>
        </div>

        <div
          ref={educationViewRef2}
          style={{ width: "100%", height: "100%" }}
        />
        <Skill
          title="Chalmers University of Technology"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius consequatur doloremque fugit expedita eos numquam dolores suscipit et facilis. Saepe accusamus optio doloribus nesciunt? Quam voluptate pariatur, itaque illo exercitationem temporibus rerum accusantium praesentium sapiente nisi qui recusandae odit sed quidem deleniti dicta explicabo quisquam vitae ipsam id fugit."
        />
        <div className="education-date">
          <p>2016-2018</p>
        </div>

        <div
          ref={educationViewRef3}
          style={{ width: "100%", height: "100%" }}
        />
        <Skill
          title="MPSI - MP*"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius consequatur doloremque fugit expedita eos numquam dolores suscipit et facilis. Saepe accusamus optio doloribus nesciunt? Quam voluptate pariatur, itaque illo exercitationem temporibus rerum accusantium praesentium sapiente nisi qui recusandae odit sed quidem deleniti dicta explicabo quisquam vitae ipsam id fugit."
        />
      </div>
    </section>
  );
};

export default Education;
