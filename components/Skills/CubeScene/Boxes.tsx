import { useFrame, useLoader } from "@react-three/fiber";
import { useBox, useSphere } from "@react-three/cannon";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Color, LinearFilter } from "three";
import { subscribe, unsubscribe } from "../../event";
import { useEffect, useRef, useState } from "react";

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
  return (
    <>
      {boxes}
      <Bomb position={[0, 5, 0]} explosionName={explosionName} />
    </>
  );
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
  const [ref, api]: any = useBox(() => ({ mass: 1, position: position }));
  const colorMap = useLoader(TextureLoader, texture);
  colorMap.minFilter = LinearFilter;
  colorMap.magFilter = LinearFilter;

  const pos = useRef([0, 0, 0]);
  useEffect(() => api.position.subscribe((v) => (pos.current = v)), []);

  useEffect(() => {
    const listener = () => {
      console.log(pos);

      const distanceToCenter = Math.sqrt(
        Math.pow(pos.current[0], 2) +
          Math.pow(pos.current[1], 2) +
          Math.pow(pos.current[2], 2)
      );
      const impulse = [
        (pos.current[0] * 30) / distanceToCenter,
        (pos.current[1] * 30) / distanceToCenter,
        (pos.current[2] * 30) / distanceToCenter,
      ];
      console.log(distanceToCenter);
      api.applyImpulse(impulse, [0, 0, 0]);
    };
    subscribe("end" + explosionName, listener);

    return () => {
      unsubscribe("end" + explosionName, () => listener);
    };
  }, [ref, api]);

  return (
    <mesh ref={ref} receiveShadow castShadow>
      {boxGeometry_}
      <meshStandardMaterial map={colorMap} metalness={0.9} roughness={0.7} />
    </mesh>
  );
};

const Bomb = ({
  position,
  explosionName,
}: {
  position: [x: number, y: number, z: number];
  explosionName: string;
}) => {
  const [ref, api]: any = useSphere(() => ({
    mass: 1,
    position: position,
    args: [0.5],
  }));

  const [explosionState, setExplosionState] = useState("notExploded");

  useEffect(() => {
    const startListener = () => {
      setExplosionState("exploding");
    };
    const endListener = () => {
      setExplosionState("exploded");
    };

    subscribe("start" + explosionName, startListener);
    subscribe("end" + explosionName, endListener);

    return () => {
      unsubscribe("start" + explosionName, () => startListener);
      unsubscribe("end" + explosionName, endListener);
    };
  }, []);

  useFrame(({ clock }) => {
    if (explosionState === "exploding") {
      //change color every 0.2 seconds
      if (clock.getElapsedTime() % 0.2 < 0.1) {
        ref.current.material.emissive = new Color(0xff0000);
        ref.current.material.emissiveIntensity = 0.5;
        ref.current.material.color = new Color(0xff0000);
      } else {
        ref.current.material.emissive = new Color(0x000000);
        ref.current.material.emissiveIntensity = 0;
        ref.current.material.color = new Color(0x000000);
      }
    }
  });

  return (
    <>
      {explosionState === "exploded" ? null : (
        <mesh ref={ref} receiveShadow castShadow>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
      )}
    </>
  );
};

export default Boxes;
