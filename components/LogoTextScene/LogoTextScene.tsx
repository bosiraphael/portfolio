import { PerspectiveCamera } from "@react-three/drei";
import dynamic from "next/dynamic";

const Model = dynamic(() => import("./Model"), { ssr: false });
const TextModel = dynamic(() => import("./TextModel"), { ssr: false });

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
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 2, 5]} intensity={1} />

      <PerspectiveCamera makeDefault fov={75} position={[0, 0, 5]} />

      {text ? <TextModel text={text} scale={scale} /> : <></>}

      {modelPath ? <Model modelPath={modelPath} scale={scale} /> : <></>}
    </>
  );
}
