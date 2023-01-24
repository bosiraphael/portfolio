import { PerspectiveCamera, Text3D, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Mesh, Vector3 } from "three";

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

const TextModel = ({ text }: { text: string }) => {
  const modelRef = useRef<any>();

  useEffect(() => {
    if (!modelRef.current) return;
    modelRef.current.geometry.center();

    // Translate the model to the center of the screen
    const box = new Vector3();
    modelRef.current.geometry.boundingBox?.getCenter(box);
    modelRef.current.position.x -= box.x;
    modelRef.current.position.y -= box.y;
    modelRef.current.position.z -= box.z;

    modelRef.current.position.needsUpdate;
  }, [modelRef.current?.geometry]);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(time * 0.5) * Math.PI * 0.2;
    }
  });
  return (
    <Text3D
      ref={modelRef}
      position={[0, 0, 0]}
      font={"typefaces/PlayfairDisplay_Regular.json"}
      height={0.1}
      size={0.5}
    >
      <meshStandardMaterial color="#2e2e2d" metalness={0.7} roughness={0.5} />
      {text}
    </Text3D>
  );
};

export default function LogoTextScene({
  modelPath,
  text,
}: {
  modelPath?: string;
  text?: string;
}) {
  return (
    // <Canvas
    //   shadows
    //   camera={{
    //     position: [0, 0, 5],
    //   }}
    //   dpr={[1, 1]}
    //   style={{ width: "100%", height: "100%" }}
    // >
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 2, 5]} intensity={1} />

      <PerspectiveCamera makeDefault fov={75} position={[0, 0, 5]} />

      {text ? <TextModel text={text} /> : <></>}

      {modelPath ? <Model modelPath={modelPath} /> : <></>}
    </>
  );
}
