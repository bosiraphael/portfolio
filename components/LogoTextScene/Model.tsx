import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const Model = ({ modelPath }: { modelPath: string }) => {
  const model = useGLTF(modelPath);
  const scene = model.scene;
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

  const modelRef = useRef<Mesh>();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (modelRef.current) {
      modelRef.current.rotation.z = -Math.sin(time * 0.5) * Math.PI * 0.2;
    }
  });

  return <primitive object={model.scene} ref={modelRef} />;
};

export default Model;
