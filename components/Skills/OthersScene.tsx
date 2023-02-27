import CubeScene from "./CubeScene/CubeScene";

const OthersScene = () => {
  return (
    <CubeScene
      title="Others"
      description="blender, photoshop, lightroom, premiere pro, microsoft office"
      textures={[
        "/logos/skills/blender.png",
        "/logos/skills/photoshop.png",
        "/logos/skills/lightroom.png",
        "/logos/skills/premierepro.png",
        "/logos/skills/microsoftoffice.png",
      ]}
    />
  );
};

export default OthersScene;
