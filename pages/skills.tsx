import Head from "next/head";
import styles from "../styles/Skills.module.css";
import { Suspense } from "react";
import CubeScene from "../components/CubeScene";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Raphaël Bosi&apos;s Portfolio - Skills</title>
        <meta name="description" content="Raphaël Bosi's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.heading}>Skills</h1>
        <Suspense fallback={null}>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              placeItems: "center",
            }}
          >
            <CubeScene />
            <Skills title="Skills" description="This is a description" />
          </div>
        </Suspense>
      </main>
    </>
  );
}
