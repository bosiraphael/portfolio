import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
const Trees = ({
  hillsHeight,
}: {
  hillsHeight: (x: any, y: any) => number;
}) => {
  const gltf = useGLTF("/models/spruce.glb");

  gltf.scene.traverse((child) => {
    // @ts-ignore
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      if (child.name === "leaves002") {
        // @ts-ignore
        child.material = new MeshStandardMaterial({
          color: "white",
          roughness: 0.5,
          metalness: 0.5,
        });
      }
    }
  });

  // Create multiple trees
  const trees = [];
  for (let i = 0; i < 2; i++) {
    const tree = gltf.scene.clone();
    tree.position.x = (Math.random() - 0.5) * 5;
    tree.position.z = -Math.random() * 0.5 + 9;
    tree.position.y = hillsHeight(tree.position.x, -tree.position.z - 20);

    const randomScale = 0.2 + Math.random() * 0.2;
    tree.scale.set(randomScale, randomScale, randomScale);
    trees.push(tree);
  }

  return (
    <>
      {trees.map((tree, index) => (
        <primitive key={index} object={tree} />
      ))}
    </>
  );
};

export default Trees;
