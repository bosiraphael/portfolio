import alea from "alea";
import { useEffect } from "react";
import { createNoise2D } from "simplex-noise";
import { Mesh } from "three";

const Hills = ({
  hillsRef,
  hillsXScale,
  hillsYScale,
  hillsZScale,
  hillsXOffset,
  hillsYOffset,
}: {
  hillsRef: React.RefObject<Mesh>;
  hillsXScale: number;
  hillsYScale: number;
  hillsZScale: number;
  hillsXOffset: number;
  hillsYOffset: number;
}) => {
  useEffect(() => {
    const simplex = createNoise2D(alea("hello"));
    const hillsGeometry = hillsRef.current?.geometry;

    const position = hillsGeometry?.attributes?.position;
    if (!position) return;

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);
      const noise =
        simplex(
          (x + hillsXOffset) / hillsXScale,
          (y + hillsYOffset) / hillsYScale
        ) * hillsZScale;
      position.setZ(i, noise);
    }

    position.needsUpdate = true;
    hillsGeometry.computeVertexNormals();
  }, [hillsXScale, hillsYScale, hillsZScale, hillsXOffset, hillsYOffset]);

  return (
    <mesh
      ref={hillsRef}
      receiveShadow
      castShadow
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1, 0]}
    >
      <planeGeometry args={[100, 100, 100, 100]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default Hills;
