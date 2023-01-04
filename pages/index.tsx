import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Suspense } from "react";
import CubeScene from "../components/CubeScene";
import LaplandScene from "../components/LaplandScene";

export default function Home() {
  return (
    <>
      <Head>
        <title>Raphaël Bosi's Portfolio</title>
        <meta name="description" content="Raphaël Bosi's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Suspense fallback={null}>
          <LaplandScene></LaplandScene>
        </Suspense>
      </main>
    </>
  );
}
