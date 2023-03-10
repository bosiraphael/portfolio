import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "../styles/Section.module.css";

const Credits = () => {
  return (
    <main
      className={styles.main}
      style={{
        flex: 1,
      }}
    >
      <h1 className={styles.heading}>Credits</h1>
    </main>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["credits", "navbar", "footer"])),
  },
});

export default Credits;
