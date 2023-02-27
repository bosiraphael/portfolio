import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "../styles/Section.module.css";

const ProjectsPage = () => {
  return <main className={styles.main}>Projects</main>;
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "navbar", "footer"])),
  },
});

export default ProjectsPage;
