import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Suspense } from "react";
import CubeScene from "../components/CubeScene";
import dynamic from "next/dynamic";

export default function Home() {
  const LaplandScene = dynamic(
    () => import("../components/LaplandScene/LaplandScene"),
    {
      ssr: false,
    }
  );
  return (
    <>
      <Head>
        <title>Raphaël Bosi&apos;s Portfolio</title>
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
