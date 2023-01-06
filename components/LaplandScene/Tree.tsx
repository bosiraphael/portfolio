import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
const Tree = () => {
  const gltf = useGLTF("/models/spruce.glb");

  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;

      if (child.name === "leaves002") {
        child.material = new MeshStandardMaterial({
          color: "white",
          roughness: 0.5,
          metalness: 0.5,
        });
      }
    }
  });

  gltf.scene.position.set(0, 0, 0);

  return <primitive object={gltf.scene} />;
};

export default Tree;
