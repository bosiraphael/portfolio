import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { AnimationMixer } from "three";

const Moose = ({
  hillsHeight,
}: {
  hillsHeight: (x: any, y: any) => number;
}) => {
  const moose = useGLTF("models/low_poly_moose/scene.gltf");

  let mixer: AnimationMixer;
  if (moose.animations.length) {
    mixer = new AnimationMixer(moose.scene);
    moose.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);

    moose.scene.position.x = ((-state.clock.elapsedTime * 0.5) % 24) + 12;
    moose.scene.position.y = hillsHeight(
      moose.scene.position.x,
      -moose.scene.position.z - 20
    );
  });
  // *************************

  moose.scene.traverse((child) => {
    // @ts-ignore
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return (
    <primitive object={moose.scene} scale={[1, 1, 1]} position={[0, 0, 2]} />
  );
};

export default Moose;
