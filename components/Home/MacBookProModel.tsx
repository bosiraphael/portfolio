import { Html, useGLTF } from "@react-three/drei";
import MacBookProPage from "./MacBookProPage";

export default function MacBookProModel(props: any) {
  const { nodes, materials }: any = useGLTF("/models/macBookPro.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI, 0, Math.PI]} scale={[1.57, 0.03, 1.43]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials.Main}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={materials.Second}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_3.geometry}
          material={materials.KeysMain}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_4.geometry}
          material={materials.KeysBottom}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_5.geometry}
          material={materials.TopLine}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_6.geometry}
          material={materials.DarkGrey}
        />
      </group>
      <group
        position={[-1.68, 0.04, -1.07]}
        rotation={[1.48, 0, -Math.PI]}
        scale={[1.57, 0.03, 1.43]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials.Outline}
        />
        <mesh castShadow receiveShadow geometry={nodes.Cube004_1.geometry}>
          <Html
            className="content"
            zIndexRange={[200, 0]}
            rotation-x={-Math.PI / 2}
            rotation-y={-Math.PI}
            position={[-1.07, 0.02, -0.8]}
            transform
          >
            <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
              <MacBookProPage />
            </div>
          </Html>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_2.geometry}
          material={materials.Emission}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_3.geometry}
          material={materials.Logo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_4.geometry}
          material={materials.Main}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_5.geometry}
          material={materials.Text}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_6.geometry}
          material={materials.Camera}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_7.geometry}
          material={materials.Camera1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_8.geometry}
          material={materials.CameraGreen}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/macBookPro.glb");
