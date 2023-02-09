import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills/Skills";
import Education from "../components/Education";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Work from "../components/Work";
import { useRef } from "react";
import { Scrollbar } from "smooth-scrollbar-react";
import Header from "../components/Header";
import CookieBanner from "../components/CookieBanner";
import FPSStats from "react-fps-stats";

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

      <Navbar />

      <main className={styles.main} ref={containerRef}>
        <FPSStats />

        <CookieBanner />

        <Header />

        <div
          style={{
            position: "absolute",
            top: "100vh",
            width: "100%",
          }}
        >
          <Scrollbar damping={0.1} thumbMinSize={50}>
            <Education />

            <Work />

            <Skills />

            {/* <Contacts /> */}

            <Footer />
          </Scrollbar>
        </div>
      </main>
    </>
  );
}
