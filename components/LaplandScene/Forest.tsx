import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { BufferAttribute, TextureLoader } from "three";

const Forest = () => {
  const points = useRef() as any;
  const treeTexture = useLoader(TextureLoader, "/textures/tree.png") as any;

  useEffect(() => {
    if (!points.current) return;

    const count = 100;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }

    points.current.geometry.setAttribute(
      "position",
      new BufferAttribute(positions, 3)
    );
  }, []);

  return (
    <points ref={points}>
      <bufferGeometry></bufferGeometry>
      <pointsMaterial
        attach="material"
        size={10}
        map={treeTexture}
        sizeAttenuation
        transparent
        alphaTest={0.5}
      />
    </points>
  );
};

export default Forest;
