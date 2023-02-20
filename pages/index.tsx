import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Suspense, useRef } from "react";
import Header from "../components/Header";
import { Canvas } from "@react-three/fiber";
import MacBookPro from "../components/MacBookPro";
import { Html, MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import Auroras from "../components/LaplandScene/Auroras";

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

        {/* <div
          className={styles.section}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div>
            <h1>Who am I?</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores quasi quod ullam placeat ipsum eligendi fugit nemo
              repudiandae doloribus in natus libero, aspernatur temporibus,
              reprehenderit eveniet dolores vitae alias sequi omnis delectus.
              Aperiam qui eveniet quisquam explicabo soluta illum amet sunt nisi
              architecto minus. Iste dignissimos iure adipisci dolorum, sunt
              velit ipsam dolorem cumque corporis similique molestiae beatae
              eius quisquam earum? Quae ullam saepe officiis quam maiores
              dolorem consequatur voluptas et recusandae assumenda consectetur
              ex soluta temporibus est possimus, iusto eum laudantium dolores
              corporis necessitatibus non ipsum. Harum eaque voluptatibus iusto
              deleniti unde pariatur saepe, sit placeat a praesentium quas!
            </p>
          </div> */}
        <div style={{ width: "100%", height: "100vh" }}>
          <Suspense fallback={null}>
            <Canvas
              camera={{
                fov: 45,
                position: [0, 0, 10],
                near: 0.1,
                far: 100,
              }}
            >
              <Html
                style={{
                  width: "100vw",
                  height: "100vh",
                }}
                center
                zIndexRange={[100, 0]}
              >
                <div
                  style={{
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "0 5rem",
                    color: "white",
                    background: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <h1
                    style={{
                      marginBottom: "2rem",
                    }}
                  >
                    Who am I?
                  </h1>
                  <p
                    style={{
                      color: "white",
                    }}
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores quasi quod ullam placeat ipsum eligendi fugit
                    nemo repudiandae doloribus in natus libero, aspernatur
                    temporibus, reprehenderit eveniet dolores vitae alias sequi
                    omnis delectus. Aperiam qui eveniet quisquam explicabo
                    soluta illum amet sunt nisi architecto minus. Iste
                    dignissimos iure adipisci dolorum, sunt velit ipsam dolorem
                    cumque corporis similique molestiae beatae eius quisquam
                    earum? Quae ullam saepe officiis quam maiores dolorem
                    consequatur voluptas et recusandae assumenda consectetur ex
                    soluta temporibus est possimus, iusto eum laudantium dolores
                    corporis necessitatibus non ipsum. Harum eaque voluptatibus
                    iusto deleniti unde pariatur saepe, sit placeat a
                    praesentium quas!
                  </p>
                </div>
              </Html>
              <ambientLight intensity={1} />
              <pointLight position={[0, 10, 0]} intensity={2} />
              <pointLight position={[-10, -10, -10]} intensity={1} />
              <MacBookPro />
              <Auroras planeArgs={[100, 20, 1, 1]} position={[0, 0, -5]} />
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
