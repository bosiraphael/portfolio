import { useLoader } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import { BufferAttribute, TextureLoader } from "three";

const Forest = ({
  hillsHeight,
}: {
  hillsHeight: (x: any, y: any) => number;
}) => {
  const points = useRef() as any;
  const treeTexture = useLoader(TextureLoader, "/textures/tree.png") as any;
  const treeAlphaMap = useLoader(
    TextureLoader,
    "/textures/tree-alpha.png"
  ) as any;

  useLayoutEffect(() => {
    if (!points.current || !hillsHeight) return;

    const count = 500;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = -Math.random() * 40 + 2;
      positions[i * 3 + 1] = hillsHeight(
        positions[i * 3],
        -positions[i * 3 + 2] - 20
      );
    }

    points.current.geometry.setAttribute(
      "position",
      new BufferAttribute(positions, 3)
    );
  }, [hillsHeight]);

  return (
    <points ref={points}>
      <bufferGeometry></bufferGeometry>
      <pointsMaterial
        attach="material"
        size={5}
        map={treeTexture}
        alphaMap={treeAlphaMap}
        transparent
        alphaToCoverage
      />
    </points>
  );
};

export default Forest;
