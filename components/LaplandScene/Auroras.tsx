import { useFrame, useLoader } from "@react-three/fiber";
import { createRef } from "react";
import { Mesh, TextureLoader } from "three";

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
    uniform float uAmplitude;
    uniform sampler2D uChannel0;
    uniform sampler2D uChannel1;

    varying vec2 vUv;

    //	Classic Perlin 3D Noise 
    //	by Stefan Gustavson
    //
    vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
    vec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

    float cnoise(vec2 P){
        vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
        vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
        Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
        vec4 ix = Pi.xzxz;
        vec4 iy = Pi.yyww;
        vec4 fx = Pf.xzxz;
        vec4 fy = Pf.yyww;
        vec4 i = permute(permute(ix) + iy);
        vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
        vec4 gy = abs(gx) - 0.5;
        vec4 tx = floor(gx + 0.5);
        gx = gx - tx;
        vec2 g00 = vec2(gx.x,gy.x);
        vec2 g10 = vec2(gx.y,gy.y);
        vec2 g01 = vec2(gx.z,gy.z);
        vec2 g11 = vec2(gx.w,gy.w);
        vec4 norm = 1.79284291400159 - 0.85373472095314 * 
          vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
        g00 *= norm.x;
        g01 *= norm.y;
        g10 *= norm.z;
        g11 *= norm.w;
        float n00 = dot(g00, vec2(fx.x, fy.x));
        float n10 = dot(g10, vec2(fx.y, fy.y));
        float n01 = dot(g01, vec2(fx.z, fy.z));
        float n11 = dot(g11, vec2(fx.w, fy.w));
        vec2 fade_xy = fade(Pf.xy);
        vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
        float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
        return 2.3 * n_xy;
      }

    void main() {
        
        float noise1 = cnoise(vUv + vec2(0.0, uTime * 0.25));
        float noise2 = cnoise(vUv - vec2(0.0, uTime * 0.2 + noise1 * 0.02));

        float v = vUv.y + noise2 * 0.1;
        v = 1.0 - abs(v * 2.0 - 1.0);
        v = pow(v, 2.0 + sin((uTime * 0.2 + noise2 * 0.25) * TAU) * 0.1);

        vec3 color = vec3(0.0);

        float x = (1.0 - vUv.x * 0.75);
        float y = 1.0 - pow(vUv.y * 2.0 - 1.0, 2.0);
        color += vec3(x * 0.5, y, x) * v;

        gl_FragColor = vec4(color, 1.0);
    }
`;

const Auroras = () => {
  const auroraRef = createRef<Mesh>();

  // Load textures for the shader
  const channel0Texture = useLoader(TextureLoader, "textures/noiseTexture.png");
  const channel1Texture = useLoader(TextureLoader, "textures/noiseTexture.png");

  useFrame(({ clock }) => {
    if (!auroraRef.current) return;
    const material = auroraRef.current.material as any;
    material.uniforms.uTime.value = clock.getElapsedTime();
    //console.log(material.uniforms.uTime.value);
  });

  return (
    <mesh
      ref={auroraRef}
      receiveShadow
      castShadow
      rotation={[0, 0, 0]}
      position={[0, 0, -50]}
    >
      <planeGeometry args={[100, 100, 100, 100]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={{
          uTime: { value: 0 },
          uAmplitude: { value: 0.5 },
          uChannel0: { value: channel0Texture },
          uChannel1: { value: channel1Texture },
        }}
      />
    </mesh>
  );
};

export default Auroras;