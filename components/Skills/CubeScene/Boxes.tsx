import { useLoader } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { LinearFilter } from "three";
import { subscribe, unsubscribe } from "../../event";
import { useEffect } from "react";

interface CubeSceneProps {
  textures: string[];
  explosionName: string;
}

const boxGeometry_ = <boxGeometry args={[1, 1, 1]} />;

const Boxes = ({ textures, explosionName }: CubeSceneProps) => {
  const boxes: JSX.Element[] = [];

  textures.forEach((texture, i) => {
    boxes.push(
      <Box
        key={i}
        position={[Math.random() * 10 - 5, Math.random() * 10 + 5, 0]}
        texture={texture}
        explosionName={explosionName}
      />
    );
  });
  return <>{boxes}</>;
};

const Box = ({
  position,
  texture,
  explosionName,
}: {
  position: [x: number, y: number, z: number];
  texture: string;
  explosionName: string;
}) => {
  const [ref, refAPI]: any = useBox(() => ({ mass: 1, position: position }));
  const colorMap = useLoader(TextureLoader, texture);
  colorMap.minFilter = LinearFilter;
  colorMap.magFilter = LinearFilter;

  useEffect(() => {
    const listener = () => {
      console.log(refAPI);
      refAPI.applyImpulse([0, 10, 0], [0, 0, 0]);
    };
    subscribe(explosionName, listener);

    return () => {
      unsubscribe(explosionName, () => listener);
    };
  }, [refAPI]);

  return (
    <mesh ref={ref} receiveShadow castShadow>
      {boxGeometry_}
      <meshStandardMaterial map={colorMap} metalness={0.9} roughness={0.7} />
    </mesh>
  );
};

export default Boxes;
