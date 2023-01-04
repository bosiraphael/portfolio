import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon";
import { createRef, Suspense } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { LinearFilter, Mesh, Vector3 } from "three";
import { OrbitControls } from "@react-three/drei";

const cursor = createRef<Mesh>();

const Boxes = ({ count }: { count: number }) => {
  const boxes = [];
  for (let i = 0; i < count; i++) {
    boxes.push(
      <Box
        key={i}
        position={[Math.random() * 10 - 5, Math.random() * 10 + 5, 0]}
      />
    );
  }
  return <>{boxes}</>;
};

const Box = ({ position }: { position: [x: number, y: number, z: number] }) => {
  const colorMap = useLoader(TextureLoader, "logos/javascript.png");
  colorMap.minFilter = LinearFilter;
  colorMap.magFilter = LinearFilter;

  const [ref]: any = useBox(() => ({ mass: 1, position: position }));

  return (
    <mesh ref={ref} receiveShadow castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={colorMap} metalness={0.5} roughness={0.5} />
    </mesh>
  );
};

const Plane = () => {
  const [ref]: any = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

const Cursor = () => {
  const size = 0.1;
  const [ref, api]: any = useSphere(
    () => ({ args: [size], position: [0, 0, 0], type: "Static" }),
    cursor
  );

  useFrame(({ camera, mouse }) => {
    var vector = new Vector3(mouse.x, mouse.y, 0.5);
    vector.unproject(camera);
    var dir = vector.sub(camera.position).normalize();
    var distance = -camera.position.z / dir.z;
    var pos = camera.position.clone().add(dir.multiplyScalar(distance));

    api.position.set(pos.x, pos.y, pos.z);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshBasicMaterial
        fog={false}
        //depthTest={false}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Raphaël Bosi's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Suspense fallback={null}>
          <Canvas
            shadows={true}
            className={styles.canvas}
            camera={{
              position: [0, 1, 5],
            }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight
              color="white"
              position={[1, 2, -1]}
              intensity={0.5}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            <Physics gravity={[0, -9.81, 0]}>
              <Cursor />
              <Boxes count={10} />
              <Plane />
            </Physics>
          </Canvas>
        </Suspense>
      </main>
    </>
  );
}
