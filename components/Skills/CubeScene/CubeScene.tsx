import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, useCylinder, usePlane } from "@react-three/cannon";
import { useRef, Suspense } from "react";
import { Vector3 } from "three";
import dynamic from "next/dynamic";

interface CubeSceneProps {
  textures: string[];
}

const Boxes = dynamic(() => import("./Boxes"), { ssr: false });

const Plane = () => {
  const [ref]: any = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#ffffff" toneMapped={false} />
    </mesh>
  );
};

const Cursor = () => {
  const radius = 0.2;
  const height = 20;

  const cursor = useRef<any>(null);
  const [cylinder, cylinderApi]: any = useCylinder(
    () => ({
      args: [radius, radius, height],
      position: [0, 0, 0],
      rotation: [Math.PI / 2, 0, 0],
      type: "Static",
    }),
    cursor
  );

  const sphere = useRef<any>(null);

  useFrame(({ camera, mouse }) => {
    var vector = new Vector3(mouse.x, mouse.y, 0.5);
    vector.unproject(camera);
    var dir = vector.sub(camera.position).normalize();
    var distance = -camera.position.z / dir.z;
    var pos = camera.position.clone().add(dir.multiplyScalar(distance));

    cylinderApi.position.set(pos.x, pos.y, pos.z);
    if (sphere.current) {
      sphere.current.position.set(pos.x, pos.y, pos.z);
    }
  });

  return (
    <>
      <mesh ref={cylinder}>
        <cylinderGeometry args={[radius, radius, height, 32, 32]} />
        <meshBasicMaterial fog={false} transparent opacity={0} />
      </mesh>
      <mesh ref={sphere}>
        <sphereGeometry args={[radius, 32]} />
        <meshBasicMaterial
          fog={false}
          depthTest={false}
          transparent
          opacity={0.8}
        />
      </mesh>
    </>
  );
};

export default function CubeScene({ textures }: CubeSceneProps) {
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 2, 5],
      }}
      dpr={[1, 1]}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={2} />
        <directionalLight
          position={[0, 1, 1]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={10}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Physics gravity={[0, -9.81, 0]}>
          <Cursor />
          <Boxes textures={textures} />
          <Plane />
        </Physics>
      </Suspense>
    </Canvas>
  );
}
