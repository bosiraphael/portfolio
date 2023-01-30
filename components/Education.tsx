import styles from "../styles/Section.module.css";
import Skill from "./Skills/Skill";

interface EducationProps {
  viewRef1: any;
  viewRef2: any;
  viewRef3: any;
}

const Education = ({ viewRef1, viewRef2, viewRef3 }: EducationProps) => {
  return (
    <section id="education" className={styles.section}>
      <h1 className={styles.heading}>Education</h1>

      <div className={styles.gridEducationWork}>
        <div className={styles.educationDate}>
          <p>2018 - 2022</p>
        </div>
        <div ref={viewRef1} style={{ width: "100%", height: "100%" }} />
        <Skill
          title="CentraleSupélec"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius consequatur doloremque fugit expedita eos numquam dolores suscipit et facilis. Saepe accusamus optio doloribus nesciunt? Quam voluptate pariatur, itaque illo exercitationem temporibus rerum accusantium praesentium sapiente nisi qui recusandae odit sed quidem deleniti dicta explicabo quisquam vitae ipsam id fugit."
        />

        <div className={styles.educationDate}>
          <p>2020</p>
        </div>
        <div ref={viewRef2} style={{ width: "100%", height: "100%" }} />
        <Skill
          title="Chalmers University of Technology"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius consequatur doloremque fugit expedita eos numquam dolores suscipit et facilis. Saepe accusamus optio doloribus nesciunt? Quam voluptate pariatur, itaque illo exercitationem temporibus rerum accusantium praesentium sapiente nisi qui recusandae odit sed quidem deleniti dicta explicabo quisquam vitae ipsam id fugit."
        />

        <div className={styles.educationDate}>
          <p>2016-2018</p>
        </div>
        <div ref={viewRef3} style={{ width: "100%", height: "100%" }} />
        <Skill
          title="MPSI - MP*"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius consequatur doloremque fugit expedita eos numquam dolores suscipit et facilis. Saepe accusamus optio doloribus nesciunt? Quam voluptate pariatur, itaque illo exercitationem temporibus rerum accusantium praesentium sapiente nisi qui recusandae odit sed quidem deleniti dicta explicabo quisquam vitae ipsam id fugit."
        />
      </div>
    </section>
  );
};

export default Education;
