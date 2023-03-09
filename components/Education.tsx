import styles from "../styles/Section.module.css";
import LogoTextScene from "./LogoTextScene/LogoTextScene";
import EducationWorkItem from "./EducationWorkItem";
import { useTranslation, Trans } from "next-i18next";

const Education = () => {
  const { t } = useTranslation("educationWork");

  return (
    <section id="education" className={styles.section}>
      <h1 className={styles.heading}>Education</h1>

      <div className={styles.gridEducationWork}>
        <EducationWorkItem
          date="2018 - 2022"
          modelPath="/models/centralesupelec.glb"
          modelScale={2}
          title="CentraleSupélec"
          description={
            <Trans
              i18nKey="centraleSupelecDescription"
              t={t}
              components={{
                a: (
                  <a
                    style={{
                      pointerEvents: "all",
                      textDecoration: "underline",
                    }}
                  />
                ),
              }}
            />
          }
        />

        <EducationWorkItem
          date="2020"
          modelPath="/models/chalmers.glb"
          modelScale={1}
          title="Chalmers University of Technology"
          description={t("chalmersDescription") as string}
        />

        <EducationWorkItem
          date="2016-2018"
          modelText="MPSI - MP*"
          modelScale={2}
          title="MPSI - MP* - Lycée Blaise Pascal (Orsay)"
          description={t("preparatoryClassDescription") as string}
        />
      </div>
    </section>
  );
};

export default Education;
