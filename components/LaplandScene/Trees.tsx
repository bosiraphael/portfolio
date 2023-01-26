import { Merged, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useMemo } from "react";
import {
  MeshLambertMaterial,
  MeshStandardMaterial,
  TextureLoader,
} from "three";
const Trees = ({
  hillsHeight,
  count,
}: {
  hillsHeight: (x: any, y: any) => number;
  count: number;
}) => {
  const spruce = useGLTF("/models/lowPolySpruce.glb");
  const meshes = useMemo(
    () => ({ Trunc: spruce.nodes.Cube, Leaves: spruce.nodes.Circle }),
    [spruce]
  );

  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    [
      "textures/Snow_001_SD/Snow_001_COLOR.jpg",
      "textures/Snow_001_SD/Snow_001_DISP.png",
      "textures/Snow_001_SD/Snow_001_NORM.jpg",
      "textures/Snow_001_SD/Snow_001_ROUGH.jpg",
      "textures/Snow_001_SD/Snow_001_OCC.jpg",
    ]
  );

  const trees = [];
  for (let i = 0; i < count; i++) {
    const tree: {
      position: [x: number, y: number, z: number];
      scale: number;
    } = {
      position: [0, 0, 0],
      scale: 1,
    };
    tree.position[0] =
      (((Math.random() - 0.5) * 0.5 + i) / (count - 1) - 0.5) * 6;
    tree.position[2] = -Math.random() * 1 + 9;
    tree.position[1] = hillsHeight(tree.position[0], -tree.position[2] - 20);

    const randomScale = 0.5;
    tree.scale = randomScale;
    trees.push(tree);
  }

  const leavesMaterial = new MeshStandardMaterial({
    map: colorMap,
    displacementMap,
    normalMap,
    roughnessMap,
    aoMap,
    displacementScale: 0.1,
    displacementBias: -0.05,
  });

  return (
    <Merged name="trees" receiveShadow castShadow meshes={meshes}>
      {(models) => {
        console.log(models);
        return (
          <group>
            {trees.map((tree, i) => (
              <group key={i} position={tree.position} scale={tree.scale}>
                <models.Trunc />
                <models.Leaves position={[0, 1, 0]} material={leavesMaterial} />
              </group>
            ))}
          </group>
        );
      }}
    </Merged>
  );
};

export default Trees;
