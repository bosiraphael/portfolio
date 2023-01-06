import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { BufferAttribute, TextureLoader } from "three";

const Forest = ({
  hillsHeight,
}: {
  hillsHeight: (x: any, y: any) => number;
}) => {
  const points = useRef() as any;
  const treeTexture = useLoader(TextureLoader, "/textures/tree3.png") as any;
  const treeAlphaMap = useLoader(
    TextureLoader,
    "/textures/tree-alpha.png"
  ) as any;

  useEffect(() => {
    if (!points.current) return;

    const count = 2000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = -Math.random() * 50 + 5;
      positions[i * 3 + 1] = hillsHeight(
        positions[i * 3],
        -positions[i * 3 + 2]
      );
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
        size={5}
        sizeAttenuation
        map={treeTexture}
        alphaMap={treeAlphaMap}
        transparent
        alphaToCoverage
      />
    </points>
  );
};

export default Forest;