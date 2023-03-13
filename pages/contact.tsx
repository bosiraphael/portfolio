import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Contacts from "../components/Contacts";
import styles from "../styles/Section.module.scss";

const ContactPage = () => {
  return (
    <main
      className={styles.main}
      style={{
        flex: 1,
      }}
    >
      <Contacts />
    </main>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "navbar", "footer"])),
  },
});

export default ContactPage;
