import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills/Skills";
import styles from "../styles/Section.module.scss";

const SkillsPage = () => {
  return (
    <main style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          width: "100%",
          height: "6rem",
        }}
      ></div>
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
