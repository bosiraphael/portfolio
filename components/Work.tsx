import styles from "../styles/Section.module.css";
import Skill from "./Skill";

interface WorkProps {
  viewRef1: any;
  viewRef2: any;
  viewRef3: any;
  viewRef4: any;
}

const Work = ({ viewRef1, viewRef2, viewRef3, viewRef4 }: WorkProps) => {
  return (
    <section id="work" className={styles.section}>
      <h1 className={styles.heading}>Work experiences</h1>

      <div className={styles.gridEducationWork}>
        <div className={styles.educationDate}>
          <p>2021-2022</p>
        </div>
        <div ref={viewRef1} style={{ width: "100%", height: "100%" }} />
        <Skill
          title="Freelance developer"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius consequatur doloremque fugit expedita eos numquam dolores suscipit et facilis. Saepe accusamus optio doloribus nesciunt? Quam voluptate pariatur, itaque illo exercitationem temporibus rerum accusantium praesentium sapiente nisi qui recusandae odit sed quidem deleniti dicta explicabo quisquam vitae ipsam id fugit."
        />

        <div className={styles.educationDate}>
          <p>2021-2022</p>
        </div>
        <div ref={viewRef2} style={{ width: "100%", height: "100%" }} />
        <Skill
          title="BauxRéal"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius consequatur doloremque fugit expedita eos numquam dolores suscipit et facilis. Saepe accusamus optio doloribus nesciunt? Quam voluptate pariatur, itaque illo exercitationem temporibus rerum accusantium praesentium sapiente nisi qui recusandae odit sed quidem deleniti dicta explicabo quisquam vitae ipsam id fugit."
        />

        <div className={styles.educationDate}>
          <p>2020</p>
        </div>
        <div ref={viewRef3} style={{ width: "100%", height: "100%" }} />
        <Skill
          title="Danone"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius consequatur doloremque fugit expedita eos numquam dolores suscipit et facilis. Saepe accusamus optio doloribus nesciunt? Quam voluptate pariatur, itaque illo exercitationem temporibus rerum accusantium praesentium sapiente nisi qui recusandae odit sed quidem deleniti dicta explicabo quisquam vitae ipsam id fugit."
        />

        <div className={styles.educationDate}>
          <p>2019</p>
        </div>
        <div ref={viewRef4} style={{ width: "100%", height: "100%" }} />
        <Skill
          title="Safran Aircraft Engines"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius consequatur doloremque fugit expedita eos numquam dolores suscipit et facilis. Saepe accusamus optio doloribus nesciunt? Quam voluptate pariatur, itaque illo exercitationem temporibus rerum accusantium praesentium sapiente nisi qui recusandae odit sed quidem deleniti dicta explicabo quisquam vitae ipsam id fugit."
        />
      </div>
    </section>
  );
};

export default Work;
