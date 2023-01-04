import styles from "../styles/Home.module.css";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Physics, useBox, useCylinder, usePlane } from "@react-three/cannon";
import { createRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { LinearFilter, Mesh, Vector3 } from "three";

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
  const colorMap = useLoader(TextureLoader, "logos/sass.png");
  colorMap.minFilter = LinearFilter;
  colorMap.magFilter = LinearFilter;

  const [ref]: any = useBox(() => ({ mass: 1, position: position }));

  return (
    <mesh ref={ref} receiveShadow castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={colorMap} metalness={0.9} roughness={0.7} />
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
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
};

const Cursor = () => {
  const radius = 0.2;
  const height = 20;
  const [cylinder, cylinderApi]: any = useCylinder(
    () => ({
      args: [radius, radius, height],
      position: [0, 0, 0],
      rotation: [Math.PI / 2, 0, 0],
      type: "Static",
    }),
    cursor
  );

  const sphere = createRef<Mesh>();

  useFrame(({ camera, mouse }) => {
    var vector = new Vector3(mouse.x, mouse.y, 0.5);
    vector.unproject(camera);
    var dir = vector.sub(camera.position).normalize();
    var distance = -camera.position.z / dir.z;
    var pos = camera.position.clone().add(dir.multiplyScalar(distance));

    cylinderApi.position.set(pos.x, pos.y, pos.z);
    if (sphere.current) {
      sphere.current.position.set(pos.x, pos.y, pos.z);
    }
  });

  return (
    <>
      <mesh ref={cylinder}>
        <cylinderGeometry args={[radius, radius, height, 32, 32]} />
        <meshBasicMaterial fog={false} transparent opacity={0} />
      </mesh>
      <mesh ref={sphere}>
        <sphereGeometry args={[radius, 32]} />
        <meshBasicMaterial
          fog={false}
          depthTest={false}
          transparent
          opacity={0.8}
        />
      </mesh>
    </>
  );
};

type Props = {};

export default function CubeScene({}: Props) {
  return (
    <Canvas
      shadows
      className={styles.canvas}
      camera={{
        position: [0, 1, 10],
      }}
    >
      <ambientLight intensity={2} />
      <directionalLight
        position={[0, 1, 1]}
        intensity={1}
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
        <Boxes count={20} />
        <Plane />
      </Physics>
    </Canvas>
  );
}