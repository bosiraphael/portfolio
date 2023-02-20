import { useGLTF } from "@react-three/drei";

const MacBookPro = () => {
  const macBookPro = useGLTF("models/macBookPro.glb");

  return (
    <group position={[0, -1, 0]}>
      <mesh
        geometry={macBookPro.nodes.macBook_BottomPart.geometry}
        material={macBookPro.nodes.macBook_BottomPart.material}
        scale={[0.01, 0.01, 0.01]}
      />
    </group>
  );
};

export default MacBookPro;
