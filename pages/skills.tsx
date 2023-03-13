import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Skills from "../components/Skills/Skills";
import styles from "../styles/Section.module.scss";

const SkillsPage = () => {
  return (
    <main className={styles.main}>
      <Skills />
    </main>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "navbar", "footer"])),
  },
});

export default SkillsPage;
