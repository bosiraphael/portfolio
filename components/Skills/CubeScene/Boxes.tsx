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
  const [bombRef, bombApi]: any = useSphere(() => ({
    mass: 1,
    position: [0, 100, 0],
    args: [0.5],
  }));

  const bombPosition = useRef([0, 0, 0]);
  useEffect(
    () =>
      bombApi.position.subscribe((v: number[]) => (bombPosition.current = v)),
    []
  );

  textures.forEach((texture, i) => {
    boxes.push(
      <Box
        key={i}
        position={[Math.random() * 10 - 5, Math.random() * 10 + 5, 0]}
        texture={texture}
        bombPosition={bombPosition}
        explosionName={explosionName}
      />
    );
  });
  return (
    <>
      {boxes}
      <Bomb bombRef={bombRef} bombApi={bombApi} explosionName={explosionName} />
    </>
  );
};

const Box = ({
  position,
  texture,
  bombPosition,
  explosionName,
}: {
  position: [x: number, y: number, z: number];
  texture: string;
  bombPosition: any;
  explosionName: string;
}) => {
  const [ref, api]: any = useBox(() => ({ mass: 1, position: position }));
  const colorMap = useLoader(TextureLoader, texture);
  colorMap.minFilter = LinearFilter;
  colorMap.magFilter = LinearFilter;

  const pos = useRef([0, 0, 0]);
  useEffect(
    () => api.position.subscribe((v: number[]) => (pos.current = v)),
    []
  );

  useEffect(() => {
    const listener = () => {
      const vectorFromBomb = [
        pos.current[0] - bombPosition.current[0],
        pos.current[1] - bombPosition.current[1],
        pos.current[2] - bombPosition.current[2],
      ];

      const distanceToBomb = Math.sqrt(
        Math.pow(vectorFromBomb[0], 2) +
          Math.pow(vectorFromBomb[1], 2) +
          Math.pow(vectorFromBomb[2], 2)
      );

      const impulse = [
        (vectorFromBomb[0] * 30) / distanceToBomb + Math.random() * 2 - 1,
        (vectorFromBomb[1] * 30) / distanceToBomb + 1,
        (vectorFromBomb[2] * 30) / distanceToBomb + Math.random() * 2 - 1,
      ];
      console.log(distanceToBomb);
      api.applyImpulse(impulse, [0, 0, 0]);
    };
    subscribe("end" + explosionName, listener);

    return () => {
      unsubscribe("end" + explosionName, listener);
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
  bombRef,
  bombApi,
  explosionName,
}: {
  bombRef: any;
  bombApi: any;
  explosionName: string;
}) => {
  const [explosionState, setExplosionState] = useState("notExploded");

  useEffect(() => {
    bombApi.sleep();
    const startListener = () => {
      setExplosionState("exploding");
      const randomPosition = [Math.random() * 10 - 5, 5, Math.random() * 6 - 3];
      bombApi.position.set(
        randomPosition[0],
        randomPosition[1],
        randomPosition[2]
      );
      bombApi.wakeUp();
    };
    const endListener = () => {
      bombApi.position.set(0, 100, 0);
      bombApi.velocity.set(0, 0, 0);
      bombApi.angularVelocity.set(0, 0, 0);
      bombApi.sleep();
      bombRef.current.material.color = new Color(0x000000);
      bombRef.current.material.emissive = new Color(0x000000);
      bombRef.current.material.emissiveIntensity = 0;

      setExplosionState("exploded");
    };

    subscribe("start" + explosionName, startListener);
    subscribe("end" + explosionName, endListener);

    return () => {
      unsubscribe("start" + explosionName, startListener);
      unsubscribe("end" + explosionName, endListener);
    };
  }, []);

  useFrame(({ clock }) => {
    if (explosionState === "exploding") {
      //change color every 0.2 seconds
      if (clock.getElapsedTime() % 0.2 < 0.1) {
        bombRef.current.material.emissive = new Color(0xff0000);
        bombRef.current.material.emissiveIntensity = 0.5;
        bombRef.current.material.color = new Color(0xff0000);
      } else {
        bombRef.current.material.emissive = new Color(0x000000);
        bombRef.current.material.emissiveIntensity = 0;
        bombRef.current.material.color = new Color(0x000000);
      }
    }
  });

  return (
    <>
      <mesh ref={bombRef} receiveShadow castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </>
  );
};

export default Boxes;
