import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "../styles/Section.module.scss";

const Credits = () => {
  return (
    <main
      className={styles.main}
      style={{
        flex: 1,
      }}
    >
      <h1 className={styles.heading}>Credits</h1>
      <p>
        This work is based on{" "}
        <a href="https://sketchfab.com/3d-models/low-poly-moose-ad0d58f8668f43d5b362d529371a7f6d">
          "Low Poly Moose"
        </a>{" "}
        by <a href="https://sketchfab.com/fromthestone">Nioma van der Steen</a>{" "}
        licensed under{" "}
        <a href="http://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a>
      </p>
    </main>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["credits", "navbar", "footer"])),
  },
});

export default Credits;
