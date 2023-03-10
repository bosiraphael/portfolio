import { Merged, useGLTF } from "@react-three/drei";
import { useLayoutEffect, useMemo, useState } from "react";
import { Mesh, MeshLambertMaterial } from "three";
const Trees = ({
  hillsHeight,
  count,
}: {
  hillsHeight: (x: any, y: any) => number;
  count: number;
}) => {
  const spruce = useGLTF("/models/spruce.glb");

  spruce.scene.traverse((child) => {
    if (child instanceof Mesh && child.name === "leaves002") {
      child.material = new MeshLambertMaterial({
        color: 0xffffff,
      });
    }
  });

  const meshes = useMemo(
    () => ({ Trunc: spruce.nodes.spruce002, Leaves: spruce.nodes.leaves002 }),
    [spruce]
  );

  // const trees: {
  //   position: [x: number, y: number, z: number];
  //   scale: number;
  // }[] = [];
  // for (let i = 0; i < count; i++) {
  //   const tree: {
  //     position: [x: number, y: number, z: number];
  //     scale: number;
  //   } = {
  //     position: [0, 0, 0],
  //     scale: 1,
  //   };
  //   tree.position[0] =
  //     (((Math.random() - 0.5) * 0.5 + i) / (count - 1) - 0.5) * 6;
  //   tree.position[2] = -Math.random() * 2 + 9;
  //   tree.position[1] = hillsHeight(tree.position[0], -tree.position[2] - 20);

  //   const randomScale = 0.3 + Math.random() * 0.2;
  //   tree.scale = randomScale;
  //   trees.push(tree);
  // }

  const [trees, setTrees] = useState<
    {
      position: [x: number, y: number, z: number];
      scale: number;
    }[]
  >();

  useLayoutEffect(() => {
    if (!hillsHeight) return;

    const trees_: {
      position: [x: number, y: number, z: number];
      scale: number;
    }[] = [];

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
      tree.position[2] = -Math.random() * 2 + 9;
      tree.position[1] = hillsHeight(tree.position[0], -tree.position[2] - 20);

      const randomScale = 0.3 + Math.random() * 0.2;
      tree.scale = randomScale;
      trees_.push(tree);
    }

    setTrees(trees_);
  }, [count, hillsHeight]);

  return (
    <Merged name="trees" meshes={meshes}>
      {(models: any) => {
        return (
          <group>
            {trees &&
              trees.map((tree, i) => (
                <group key={i} position={tree.position} scale={tree.scale}>
                  <models.Trunc />
                  <models.Leaves />
                </group>
              ))}
          </group>
        );
      }}
    </Merged>
  );
};

export default Trees;
