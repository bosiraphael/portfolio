import { Merged, useGLTF, useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useMemo } from "react";
import {
  Mesh,
  MeshLambertMaterial,
  MeshStandardMaterial,
  RepeatWrapping,
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

  console.log(meshes);

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

  return (
    <Merged name="trees" receiveShadow castShadow meshes={meshes}>
      {(models) => {
        console.log(models);
        return (
          <group>
            {trees.map((tree, i) => (
              <group key={i} position={tree.position} scale={tree.scale}>
                <models.Trunc />
                <models.Leaves position={[0, 1, 0]} />
              </group>
            ))}
          </group>
        );
      }}
    </Merged>
  );
};

export default Trees;
