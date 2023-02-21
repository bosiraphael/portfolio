import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRef } from "react";
import Header from "../components/Home/Header";
import ContactFormSection from "../components/Home/ContactFormSection";
import WhoAmISection from "../components/Home/WhoAmISection";

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

      <main className={styles.main} ref={containerRef}>
        <Header />

        <WhoAmISection />

        <ContactFormSection />
      </main>
    </>
  );
}
