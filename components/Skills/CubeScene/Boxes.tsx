import { useLoader } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { LinearFilter } from "three";

interface CubeSceneProps {
  textures: string[];
}

const boxGeometry_ = <boxGeometry args={[1, 1, 1]} />;

const Boxes = ({ textures }: CubeSceneProps) => {
  const boxes: JSX.Element[] = [];

  textures.forEach((texture, i) => {
    boxes.push(
      <Box
        key={i}
        position={[Math.random() * 10 - 5, Math.random() * 10 + 5, 0]}
        texture={texture}
      />
    );
  });
  return <>{boxes}</>;
};

const Box = ({
  position,
  texture,
}: {
  position: [x: number, y: number, z: number];
  texture: string;
}) => {
  const [ref]: any = useBox(() => ({ mass: 1, position: position }));
  const colorMap = useLoader(TextureLoader, texture);
  colorMap.minFilter = LinearFilter;
  colorMap.magFilter = LinearFilter;

  return (
    <mesh ref={ref} receiveShadow castShadow>
      {boxGeometry_}
      <meshStandardMaterial map={colorMap} metalness={0.9} roughness={0.7} />
    </mesh>
  );
};

export default Boxes;
