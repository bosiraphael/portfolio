import { Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

const TextModel = ({ text, scale }: { text: string; scale?: number }) => {
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
      modelRef.current.rotation.y = Math.sin(time * 0.8) * Math.PI * 0.05;
    }
  });
  return (
    <Text3D
      ref={modelRef}
      position={[0, 0, 0]}
      font={"/typefaces/PlayfairDisplay_Regular.json"}
      height={0.1}
      size={scale ? 0.5 * scale : 0.5}
    >
      <meshStandardMaterial color="#424242" metalness={0.5} roughness={0.3} />
      {text}
    </Text3D>
  );
};

export default TextModel;
