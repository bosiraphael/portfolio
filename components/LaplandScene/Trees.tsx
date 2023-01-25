import { Instance, Instances, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import {
  InstancedBufferAttribute,
  InstancedBufferGeometry,
  MeshStandardMaterial,
} from "three";
const Trees = ({
  hillsHeight,
  count,
}: {
  hillsHeight: (x: any, y: any) => number;
  count: number;
}) => {
  const { nodes } = useGLTF("/models/spruce.glb");

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

    const randomScale = 0.3 + Math.random() * 0.1;
    tree.scale = randomScale;
    trees.push(tree);
  }

  const leavesMaterial = new MeshStandardMaterial({
    color: "white",
    roughness: 0.5,
    metalness: 0.5,
  });

  return (
    <>
      <Instances
        range={count}
        limit={count}
        position={[0, 0, 0]}
        material={nodes.spruce002.material}
        geometry={nodes.spruce002.geometry}
      >
        {trees.map((tree, i) => {
          return (
            <Instance key={i} position={tree.position} scale={tree.scale} />
          );
        })}
      </Instances>
      <Instances
        range={count}
        limit={count}
        position={[0, 0, 0]}
        material={leavesMaterial}
        geometry={nodes.leaves002.geometry}
      >
        {trees.map((tree, i) => {
          return (
            <Instance key={i} position={tree.position} scale={tree.scale} />
          );
        })}
      </Instances>
    </>
  );
};

export default Trees;
