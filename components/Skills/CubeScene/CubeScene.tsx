import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, useCylinder, usePlane } from "@react-three/cannon";
import { useRef, Suspense, useState, useMemo } from "react";
import { Vector3 } from "three";
import dynamic from "next/dynamic";
import { Html, MeshReflectorMaterial } from "@react-three/drei";
import Skill from "../Skill";
import { publish } from "../../event";
import crypto from "crypto";
import styles from "../../../styles/Section.module.css";

interface CubeSceneProps {
  textures: string[];
  title: string;
  description: string;
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
        color={0xbdbdbd}
        blur={[300, 300]} // Blur ground reflections (width, heigt), 0 skips blur
        mixBlur={0} // How much blur mixes with surface roughness (default = 1)
        mixStrength={1} // Strength of the reflections
        mixContrast={1} // Contrast of the reflections
        resolution={512} // Off-buffer resolution, lower=faster, higher=better quality, slower
        mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        depthScale={1} // Scale the depth factor (0 = no depth, default = 0)
        minDepthThreshold={0.4} // Lower edge for the depthTexture interpolation (default = 0)
        maxDepthThreshold={1.4} // Upper edge for the depthTexture interpolation (default = 0)
        distortion={1} // Amount of distortion based on the distortionMap texture
        roughness={1}
        metalness={0.5}
      />
    </mesh>
  );
};

const Cursor = () => {
  const radius = 0.4;
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
      <mesh ref={cylinder} visible={false}>
        <cylinderGeometry args={[radius, radius, height, 32, 32]} />
      </mesh>
      <mesh ref={sphere}>
        <sphereGeometry args={[radius / 2, 32]} />
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

const Borders = () => {
  const [leftPlane]: any = usePlane(() => ({
    rotation: [0, Math.PI / 2, 0],
    position: [-5, 0, 0],
  }));
  const [rightPlane]: any = usePlane(() => ({
    rotation: [0, -Math.PI / 2, 0],
    position: [5, 0, 0],
  }));
  const [backPlane]: any = usePlane(() => ({
    rotation: [0, 0, 0],
    position: [0, 0, -4],
  }));
  const [frontPlane]: any = usePlane(() => ({
    rotation: [Math.PI, 0, 0],
    position: [0, 0, 3],
  }));

  return (
    <>
      <mesh ref={leftPlane} visible={false}>
        <planeGeometry args={[100, 100]} />
      </mesh>
      <mesh ref={rightPlane} visible={false}>
        <planeGeometry args={[100, 100]} />
      </mesh>
      <mesh ref={backPlane} visible={false}>
        <planeGeometry args={[100, 100]} />
      </mesh>
      <mesh ref={frontPlane} visible={false}>
        <planeGeometry args={[100, 100]} />
      </mesh>
    </>
  );
};

const explosion = (explosionName: string) => {
  publish("start" + explosionName, {
    position: [0, 0, 0],
    velocity: [0, 0, 0],
    spread: 10,
    size: 1,
    count: 100,
  });

  setTimeout(() => {
    publish("end" + explosionName, {});
  }, 2000);
};

export default function CubeScene({
  textures,
  title,
  description,
}: CubeSceneProps) {
  const uuid = useMemo(() => crypto.randomBytes(16).toString("hex"), []);
  const explosionName = "explosion" + uuid;
  const [buttonHovered, setButtonHovered] = useState(false);
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 2, 5],
      }}
      dpr={[1, 1]}
    >
      <Suspense fallback={null}>
        <color attach="background" args={["#ffffff"]} />
        <fog attach="fog" args={["#ffffff", 5, 20]} />

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
        <Html fullscreen zIndexRange={[100, 0]}>
          <div style={{ width: "100%", textAlign: "center" }}>
            <Skill title={title} description={description} />
            <button
              className={styles.boomButton}
              onClick={() => explosion(explosionName)}
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
            >
              Boom {buttonHovered ? "💥" : "💣"}
            </button>
          </div>
        </Html>
        <Physics gravity={[0, -9.81, 0]}>
          <Cursor />
          <Boxes textures={textures} explosionName={explosionName} />
          <Plane />
          <Borders />
        </Physics>
      </Suspense>
    </Canvas>
  );
}
