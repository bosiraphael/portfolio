import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MathUtils } from "three";

const MacBookPro = ({ position }) => {
  const macBookPro = useGLTF("models/macBookPro.glb");
  const group = useRef<any>();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 20 + 0.25,
      0.1
    );
    group.current.rotation.y = MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 20 - 1,
      0.1
    );
    group.current.rotation.z = MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 8) / 20,
      0.1
    );
    group.current.position.y = MathUtils.lerp(
      group.current.position.y,
      (-2 + Math.sin(t / 2)) / 2,
      0.1
    );
  });

  return (
    <group ref={group} position={position}>
      <pointLight position={[-2, 3, 0.5]} intensity={1} />
      <pointLight position={[0, 3, 0.5]} intensity={1} color="#3b9642" />
      <primitive object={macBookPro.scene} scale={1} />
    </group>
  );
};

export default MacBookPro;
