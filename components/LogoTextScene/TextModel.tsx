import { Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

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

export default TextModel;
