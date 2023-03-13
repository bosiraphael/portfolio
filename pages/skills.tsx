import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Skills from "../components/Skills/Skills";

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
    ...(await serverSideTranslations(locale, [
      "skills",
      "common",
      "navbar",
      "footer",
    ])),
  },
});

export default SkillsPage;
