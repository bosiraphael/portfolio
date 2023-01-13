import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const CentraleSupelec = () => {
  const centraleSupelec = useGLTF("models/chalmers.glb");
  const scene = centraleSupelec.scene;
  scene.rotation.x = Math.PI / 2;

  scene.traverse((child) => {
    // @ts-ignore
    if (child.isMesh) {
      // @ts-ignore
      child.material.metalness = 0.7;
      // @ts-ignore
      child.material.roughness = 0.5;
    }
  });

  const centraleSupelecRef = useRef<Mesh>();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (centraleSupelecRef.current) {
      centraleSupelecRef.current.rotation.z =
        Math.sin(time * 0.5) * Math.PI * 0.2;
    }
  });

  return <primitive object={centraleSupelec.scene} ref={centraleSupelecRef} />;
};

export default function EducationScene() {
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 0, 5],
      }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[0, 1, 1]} intensity={2} />
      <CentraleSupelec />
    </Canvas>
  );
}
