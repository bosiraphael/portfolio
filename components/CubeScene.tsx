import styles from "../styles/Home.module.css";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  Debug,
  Physics,
  useBox,
  useCylinder,
  usePlane,
} from "@react-three/cannon";
import { createRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { LinearFilter, Mesh, Vector3 } from "three";
import { useScroll } from "@react-three/drei";

const Boxes = ({
  count,
  position,
}: {
  count: number;
  position: [x: number, y: number, z: number];
}) => {
  const boxes = [];
  for (let i = 0; i < count; i++) {
    boxes.push(
      <Box
        key={i}
        position={[
          position[0] + Math.random() * 10 - 5,
          position[1] + Math.random() * 10 + 5,
          position[2] + 0,
        ]}
      />
    );
  }
  return <>{boxes}</>;
};

const Box = ({ position }: { position: [x: number, y: number, z: number] }) => {
  const colorMap = useLoader(TextureLoader, "logos/typescript.png");
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

const Plane = ({
  position,
}: {
  position: [x: number, y: number, z: number];
}) => {
  const [ref]: any = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: position,
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
};

const Cursor = ({
  position,
}: {
  position: [x: number, y: number, z: number];
}) => {
  const radius = 0.2;
  const height = 20;

  const cursor = createRef<Mesh>();
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
  const scrol = useScroll();

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

type Props = {
  position: [x: number, y: number, z: number];
};

export default function CubeScene({ position }: Props) {
  return (
    <group>
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
        <Debug>
          <Cursor position={position} />
          <Boxes count={100} position={position} />
          <Plane position={position} />
        </Debug>
      </Physics>
    </group>
  );
}
