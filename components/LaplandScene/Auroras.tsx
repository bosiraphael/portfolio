import { useFrame, useLoader } from "@react-three/fiber";
import { useState } from "react";
import { TextureLoader } from "three";

const vertexShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragmentShader = `
    #define TAU 6.2831853071

    uniform float uTime;
    uniform sampler2D uChannel0;
    uniform sampler2D uChannel1;

    varying vec2 vUv;

    void main() {
    float o = texture(uChannel1, vUv * 0.25 + vec2(0.0, uTime * 0.025)).r;
    float d = (texture(uChannel0, vUv * 0.25 - vec2(0.0, uTime * 0.02 + o * 0.02)).r * 2.0 - 1.0);
    
    float v = vUv.y + d * 0.1;
    v = 1.0 - abs(v * 2.0 - 1.0);
    v = pow(v, 2.0 + sin((uTime * 0.2 + d * 0.25) * TAU) * 0.5);
    
    vec3 color = vec3(0.0);
    
    float x = (1.0 - vUv.x * 0.75);
    float y = 1.0 - abs(vUv.y * 2.0 - 1.0);
    color += vec3(x * 0.5, y, x) * v;
    
    vec2 seed = gl_FragCoord.xy * 0.01;
    vec2 r;
    r.x = fract(sin((seed.x * 12.9898) + (seed.y * 78.2330)) * 43758.5453);
    r.y = fract(sin((seed.x * 53.7842) + (seed.y * 47.5134)) * 43758.5453);

    float s = mix(r.x, (sin((uTime * 2.5 + 60.0) * r.y) * 0.5 + 0.5) * ((r.y * r.y) * (r.y * r.y)), 0.04); 
    color += pow(s, 70.0) * (1.0 - v);
    
    gl_FragColor = vec4(color, 1.0);
    }
`;

const Auroras = () => {
  const [time, setTime] = useState(0);

  // Load textures for the shader
  const channel0Texture = useLoader(TextureLoader, "textures/noiseTexture.png");
  const channel1Texture = useLoader(TextureLoader, "textures/noiseTexture.png");

  useFrame(({ clock }) => {
    setTime(clock.getElapsedTime());
  });

  return (
    <mesh receiveShadow castShadow rotation={[0, 0, 0]} position={[0, 0, -100]}>
      <planeGeometry args={[100, 100, 100, 100]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={{
          uTime: { value: time },
          uChannel0: { value: channel0Texture },
          uChannel1: { value: channel1Texture },
        }}
      />
    </mesh>
  );
};

export default Auroras;
