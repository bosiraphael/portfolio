import { useTexture } from "@react-three/drei";
import { useEffect } from "react";
import { Mesh, MeshStandardMaterial, RepeatWrapping } from "three";

const Hills = ({
  hillsRef,
  hillsHeight,
}: {
  hillsRef: React.RefObject<Mesh>;
  hillsHeight: (x: any, y: any) => number;
}) => {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
    useTexture(
      [
        "textures/Snow_001_SD/Snow_001_COLOR.jpg",
        "textures/Snow_001_SD/Snow_001_DISP.png",
        "textures/Snow_001_SD/Snow_001_NORM.jpg",
        "textures/Snow_001_SD/Snow_001_ROUGH.jpg",
        "textures/Snow_001_SD/Snow_001_OCC.jpg",
      ],
      ([colorMap, displacementMap, normalMap, roughnessMap, aoMap]) => {
        colorMap.wrapS = colorMap.wrapT = RepeatWrapping;
        displacementMap.wrapS = displacementMap.wrapT = RepeatWrapping;
        normalMap.wrapS = normalMap.wrapT = RepeatWrapping;
        roughnessMap.wrapS = roughnessMap.wrapT = RepeatWrapping;
        aoMap.wrapS = aoMap.wrapT = RepeatWrapping;

        colorMap.repeat.set(2, 2);
        displacementMap.repeat.set(2, 2);
        normalMap.repeat.set(2, 2);
        roughnessMap.repeat.set(2, 2);
        aoMap.repeat.set(2, 2);
      }
    );

  const snowMaterial = new MeshStandardMaterial({
    map: colorMap,
    displacementMap: displacementMap,
    normalMap: normalMap,
    roughnessMap: roughnessMap,
    aoMap: aoMap,
    displacementScale: 0.02,
    displacementBias: -0.02,
  });
  useEffect(() => {
    const hillsGeometry = hillsRef.current?.geometry;
    if (!hillsGeometry) return;

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
      position={[0, 0, -20]}
      material={snowMaterial}
    >
      <planeGeometry args={[100, 60, 100, 100]} />
    </mesh>
  );
};

export default Hills;
