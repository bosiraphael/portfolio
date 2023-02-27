import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Education from "../components/Education";
import Work from "../components/Work";
import styles from "../styles/Section.module.css";

const EducationWorkPage = () => {
  return (
    <main className={styles.main}>
      <Education />
      <Work />
    </main>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "navbar", "footer"])),
  },
});

export default EducationWorkPage;
