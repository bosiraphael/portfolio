import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import MacBookPro from "./MacBookPro";
import { Html } from "@react-three/drei";
import Auroras from "../LaplandScene/Auroras";
import { Vector3 } from "three";

const WhoAmISection = () => {
  const containerRef = useRef<any>(null);
  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100vh", position: "relative" }}
    >
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
                padding: "0 5%",
                color: "white",
                background: "rgba(0, 0, 0, 0.5)",
                pointerEvents: "none",
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
                  textAlign: "justify",
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores quasi quod ullam placeat ipsum eligendi fugit nemo
                repudiandae doloribus in natus libero, aspernatur temporibus,
                reprehenderit eveniet dolores vitae alias sequi omnis delectus.
                Aperiam qui eveniet quisquam explicabo soluta illum amet sunt
                nisi architecto minus. Iste dignissimos iure adipisci dolorum,
                sunt velit ipsam dolorem cumque corporis similique molestiae
                beatae eius quisquam earum? Quae ullam saepe officiis quam
                maiores dolorem consequatur voluptas et recusandae assumenda
                consectetur ex soluta temporibus est possimus, iusto eum
                laudantium dolores corporis necessitatibus non ipsum. Harum
                eaque voluptatibus iusto deleniti unde pariatur saepe, sit
                placeat a praesentium quas!
              </p>
            </div>
          </Html>
          <ambientLight intensity={1} />
          <MacBookPro position={[3, -1, 0]} />
          <Auroras planeArgs={[100, 20, 1, 1]} position={[0, 0, -5]} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default WhoAmISection;
