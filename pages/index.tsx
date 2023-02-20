import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Suspense, useRef } from "react";
import Header from "../components/Header";
import { Canvas } from "@react-three/fiber";
import MacBookPro from "../components/MacBookPro";

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

        <div className={styles.section}>
          <h1>Who am I?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            quasi quod ullam placeat ipsum eligendi fugit nemo repudiandae
            doloribus in natus libero, aspernatur temporibus, reprehenderit
            eveniet dolores vitae alias sequi omnis delectus. Aperiam qui
            eveniet quisquam explicabo soluta illum amet sunt nisi architecto
            minus. Iste dignissimos iure adipisci dolorum, sunt velit ipsam
            dolorem cumque corporis similique molestiae beatae eius quisquam
            earum? Quae ullam saepe officiis quam maiores dolorem consequatur
            voluptas et recusandae assumenda consectetur ex soluta temporibus
            est possimus, iusto eum laudantium dolores corporis necessitatibus
            non ipsum. Harum eaque voluptatibus iusto deleniti unde pariatur
            saepe, sit placeat a praesentium quas!
          </p>
          <Suspense fallback={null}>
            <Canvas>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <spotLight
                position={[-10, -10, -10]}
                angle={0.15}
                penumbra={1}
                castShadow
              />
              <MacBookPro />
            </Canvas>
          </Suspense>
        </div>
        <div className={styles.section}>
          <h1>You have a project in mind?</h1>
          <h1>Contact me</h1>
        </div>
      </main>
    </>
  );
}
