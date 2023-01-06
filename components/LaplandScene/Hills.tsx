import { useEffect } from "react";
import { Mesh } from "three";

const Hills = ({
  hillsRef,
  hillsHeight,
}: {
  hillsRef: React.RefObject<Mesh>;
  hillsHeight: (x: any, y: any) => number;
}) => {
  useEffect(() => {
    const hillsGeometry = hillsRef.current?.geometry;

    const position = hillsGeometry?.attributes?.position;
    if (!position) return;

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);
      const noise = hillsHeight(x, y);
      position.setZ(i, noise);
    }

    position.needsUpdate = true;
    hillsGeometry.computeVertexNormals();
  }, [hillsHeight, hillsRef]);

  return (
    <mesh
      ref={hillsRef}
      receiveShadow
      castShadow
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
    >
      <planeGeometry args={[100, 100, 100, 100]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default Hills;
