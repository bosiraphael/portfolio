import styles from "../styles/Section.module.css";
import LogoTextScene from "./LogoTextScene/LogoTextScene";
import Skill from "./Skills/Skill";
import { useTranslation } from "next-i18next";

const Work = () => {
  const { t } = useTranslation("educationWork");
  return (
    <section id="work" className={styles.section}>
      <h1 className={styles.heading}>Work experiences</h1>

      <div className={styles.gridEducationWork}>
        <div className={styles.educationDate}>
          <p>2023</p>
        </div>
        <LogoTextScene modelPath="/models/rbLogo.glb" scale={1.5} />
        <Skill
          title={t("freelanceTitle") as string}
          description={t("freelanceDescription") as string}
        />

        <div className={styles.educationDate}>
          <p>2021-2022</p>
        </div>
        <LogoTextScene text="BauxRéal" scale={2} />
        <Skill
          title="BauxRéal"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius consequatur doloremque fugit expedita eos numquam dolores suscipit et facilis. Saepe accusamus optio doloribus nesciunt? Quam voluptate pariatur, itaque illo exercitationem temporibus rerum accusantium praesentium sapiente nisi qui recusandae odit sed quidem deleniti dicta explicabo quisquam vitae ipsam id fugit."
        />

        <div className={styles.educationDate}>
          <p>2020</p>
        </div>
        <LogoTextScene modelPath="/models/danone.glb" scale={1.5} />
        <Skill
          title="Danone"
          description="I did a 6-month internship at Danone in the Data Science Team. I had the opportunity to work on GANs (Generative Adversarial Networks) architectures there."
        />

        <div className={styles.educationDate}>
          <p>2019</p>
        </div>
        <LogoTextScene modelPath="/models/safran.glb" scale={2} />
        <Skill
          title="Safran Aircraft Engines"
          description="I did a 5 weeks internship at Safran Aircraft Engines."
        />
      </div>
    </section>
  );
};

export default Work;
