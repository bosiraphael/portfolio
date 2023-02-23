import { PerspectiveCamera, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import TextModel from "./TextModel";

export default function LogoTextScene({
  modelPath,
  text,
  scale,
}: {
  modelPath?: string;
  text?: string;
  scale?: number;
}) {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 1, 5]} intensity={0.5} />

      <PerspectiveCamera makeDefault fov={75} position={[0, 0, 5]} />

      {text ? <TextModel text={text} scale={scale} /> : <></>}

      {modelPath ? <Model modelPath={modelPath} scale={scale} /> : <></>}

      <Preload all />
    </Canvas>
  );
}
