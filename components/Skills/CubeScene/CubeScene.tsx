import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, useCylinder, usePlane } from "@react-three/cannon";
import { useRef, Suspense } from "react";
import { Vector3 } from "three";
import dynamic from "next/dynamic";
import { MeshReflectorMaterial } from "@react-three/drei";

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
      <MeshReflectorMaterial
        color={0x050505}
        blur={[300, 100]} // Blur ground reflections (width, heigt), 0 skips blur
        mixBlur={1} // How much blur mixes with surface roughness (default = 1)
        mixStrength={50} // Strength of the reflections
        mixContrast={1} // Contrast of the reflections
        resolution={256} // Off-buffer resolution, lower=faster, higher=better quality, slower
        mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        depthScale={1} // Scale the depth factor (0 = no depth, default = 0)
        minDepthThreshold={0.4} // Lower edge for the depthTexture interpolation (default = 0)
        maxDepthThreshold={1.4} // Upper edge for the depthTexture interpolation (default = 0)
        depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
        distortion={1} // Amount of distortion based on the distortionMap texture
        roughness={1}
        metalness={0.5}
      />
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
        <color attach="background" args={["#191920"]} />
        <fog attach="fog" args={["#191920", 5, 20]} />

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
