import styles from "../styles/Section.module.css";
import LogoTextScene from "./LogoTextScene/LogoTextScene";
import EducationWorkItem from "./EducationWorkItem";
import { useTranslation } from "next-i18next";

const Work = () => {
  const { t } = useTranslation("educationWork");
  return (
    <section
      id="work"
      className={styles.section}
      style={{ marginBottom: "5rem" }}
    >
      <h1 className={styles.heading}>Work experiences</h1>

      <div className={styles.gridEducationWork}>
        <EducationWorkItem
          date="2023"
          modelPath="/models/rbLogo.glb"
          modelScale={1.5}
          title={t("freelanceTitle") as string}
          description={t("freelanceDescription") as string}
        />

        <EducationWorkItem
          date="2021-2022"
          modelText="BauxRéal"
          modelScale={2}
          title="BauxRéal"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius consequatur doloremque fugit expedita eos numquam dolores suscipit et facilis. Saepe accusamus optio doloribus nesciunt? Quam voluptate pariatur, itaque illo exercitationem temporibus rerum accusantium praesentium sapiente nisi qui recusandae odit sed quidem deleniti dicta explicabo quisquam vitae ipsam id fugit."
        />

        <EducationWorkItem
          date="2020"
          modelPath="/models/danone.glb"
          modelScale={1.5}
          title="Danone"
          description="I did a 6-month internship at Danone in the Data Science Team. I had the opportunity to work on GANs (Generative Adversarial Networks) architectures there."
        />

        <EducationWorkItem
          date="2019"
          modelPath="/models/safran.glb"
          modelScale={2}
          title="Safran Aircraft Engines"
          description="I did a 5 weeks internship at Safran Aircraft Engines."
        />
      </div>
    </section>
  );
};

export default Work;
