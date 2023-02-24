import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Suspense, useRef } from "react";
import Header from "../components/Home/Header";
import ContactFormSection from "../components/Home/ContactFormSection";
import WhoAmISection from "../components/Home/WhoAmISection";
import { Scrollbar } from "smooth-scrollbar-react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
//import { Loader } from "@react-three/drei";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("../components/Loader"), {
  ssr: false,
});

export default function Home() {
  const containerRef = useRef<any>(null);

  return (
    <>
      <Head>
        <title>Raphaël Bosi&apos;s Portfolio</title>
        <meta name="description" content="Raphaël Bosi's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/rb.svg" />
      </Head>
      <main
        className={styles.main}
        ref={containerRef}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Scrollbar damping={0.1} thumbMinSize={10}>
          <Header />

          <WhoAmISection />

          <ContactFormSection />
        </Scrollbar>
        <Loader />
      </main>
    </>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "navbar", "footer"])),
  },
});
