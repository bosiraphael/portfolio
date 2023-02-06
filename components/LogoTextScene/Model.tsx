import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const Model = ({ modelPath, scale }: { modelPath: string; scale?: number }) => {
  const model = useGLTF(modelPath);
  const scene = model.scene;
  scene.rotation.x = Math.PI / 2;

  scene.traverse((child) => {
    // @ts-ignore
    if (child.isMesh) {
      // @ts-ignore
      child.material.metalness = 0.5;
      // @ts-ignore
      child.material.roughness = 0.3;
    }
  });

  const modelRef = useRef<Mesh>();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (modelRef.current) {
      modelRef.current.rotation.z = -Math.sin(time * 0.8) * Math.PI * 0.05;
    }
  });

  return (
    <primitive object={model.scene} ref={modelRef} scale={scale ? scale : 1} />
  );
};

export default Model;
