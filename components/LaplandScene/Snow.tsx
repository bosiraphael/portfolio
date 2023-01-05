import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { BufferAttribute, BufferGeometry } from "three";

export default function SnowParticles() {
  const points = useRef() as any;

  useEffect(() => {
    if (!points.current) return;

    const count = 50000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100;
    }

    points.current.geometry.setAttribute(
      "position",
      new BufferAttribute(positions, 3)
    );
  }, []);

  useFrame(() => {
    const positions = points.current?.geometry.attributes.position.array;
    if (!positions) return;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] -= 0.02;
      if (positions[i + 1] < -10) {
        positions[i + 1] = 10 + Math.random() * 10;
      }
    }
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry></bufferGeometry>
      <pointsMaterial attach="material" color="white" size={0.05} />
    </points>
  );
}
