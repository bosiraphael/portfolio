import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { BufferAttribute, BufferGeometry, TextureLoader } from "three";

export default function SnowParticles() {
  const points = useRef() as any;
  let lastElapsedTime = 0;
  let delta = 0;

  const alphaMap = useLoader(
    TextureLoader,
    "/textures/snowflake-alpha.png"
  ) as any;

  useEffect(() => {
    if (!points.current) return;

    const count = 10000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100;
    }

    points.current.geometry.setAttribute(
      "position",
      new BufferAttribute(positions, 3)
    );
  }, []);

  useFrame(({ clock }) => {
    const positions = points.current?.geometry.attributes.position?.array;
    if (!positions) return;
    const elapsedTime = clock.getElapsedTime();
    delta = elapsedTime - lastElapsedTime;
    lastElapsedTime = elapsedTime;

    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] -= delta * 1.2;
      if (positions[i + 1] < 0) {
        positions[i + 1] = 10 + Math.random() * 10;
      }
    }
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry></bufferGeometry>
      <pointsMaterial
        attach="material"
        color="white"
        size={0.1}
        sizeAttenuation
        alphaMap={alphaMap}
        transparent
        alphaToCoverage
      />
    </points>
  );
}
