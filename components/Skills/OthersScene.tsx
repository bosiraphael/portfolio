import CubeScene from "./CubeScene/CubeScene";

const OthersScene = () => {
  return (
    <CubeScene
      textures={[
        "logos/blender.png",
        "logos/photoshop.png",
        "logos/lightroom.png",
        "logos/premierepro.png",
        "logos/microsoftoffice.png",
      ]}
    />
  );
};

export default OthersScene;
