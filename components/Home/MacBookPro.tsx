import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MathUtils } from "three";
import MacBookProModel from "./MacBookProModel";

const MacBookPro = ({
  position,
  scale,
  rotation,
}: {
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
}) => {
  const group = useRef<any>();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x =
      rotation[0] +
      MathUtils.lerp(
        group.current.rotation.x - rotation[0],
        Math.cos(t / 2) / 20,
        0.1
      );
    group.current.rotation.y =
      rotation[1] +
      MathUtils.lerp(
        group.current.rotation.y - rotation[1],
        Math.sin(t / 4) / 20,
        0.1
      );
    group.current.rotation.z =
      rotation[2] +
      MathUtils.lerp(
        group.current.rotation.z - rotation[2],
        Math.sin(t / 8) / 20,
        0.1
      );
    group.current.position.y =
      position[1] +
      MathUtils.lerp(
        group.current.position.y - position[1],
        (-2 + Math.sin(t / 2)) / 2,
        0.1
      );
  });

  return (
    <group ref={group} position={position} scale={scale}>
      <pointLight position={[-2, 3, 0.5]} intensity={1} />
      <pointLight position={[0, 3, 0.5]} intensity={1} color="#3b9642" />
      <MacBookProModel />
    </group>
  );
};

export default MacBookPro;
