import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const CentraleSupelec = () => {
  const centraleSupelec = useGLTF("models/centraleSupelec.glb");
  const scene = centraleSupelec.scene;
  scene.rotation.x = Math.PI / 2;

  scene.traverse((child) => {
    // @ts-ignore
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;

      // @ts-ignore
      child.material.metalness = 0.7;
      // @ts-ignore
      child.material.roughness = 0.5;
    }
  });

  const centraleSupelecRef = useRef<Mesh>();

  useFrame((state, delta) => {
    if (centraleSupelecRef.current) {
      centraleSupelecRef.current.rotation.z -= 0.01;
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
      <directionalLight
        position={[0, 1, 1]}
        intensity={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.001}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <CentraleSupelec />
    </Canvas>
  );
}
