import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
const Trees = () => {
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
  for (let i = 0; i < 20; i++) {
    const tree = gltf.scene.clone();
    tree.position.x = (Math.random() - 0.5) * 10;
    tree.position.z = -Math.random() * 20 + 7;
    tree.position.y = 0;

    const randomScale = 0.5 + Math.random() * 0.5;
    tree.scale.set(randomScale, randomScale, randomScale);
    trees.push(tree);
  }
  console.log(trees);

  return (
    <>
      {trees.map((tree, index) => (
        <primitive key={index} object={tree} />
      ))}
    </>
  );
};

export default Trees;
