import CubeScene from "./CubeScene/CubeScene";

const DevelopmentScene = () => {
  return (
    <CubeScene
      textures={[
        "logos/c.png",
        "logos/cplusplus.png",
        "logos/csharp.png",
        "logos/java.png",
        "logos/matlab.png",
        "logos/sql.png",
        "logos/vscode.png",
        "logos/androidstudio.png",
        "logos/docker.png",
        "logos/github.png",
      ]}
    />
  );
};

export default DevelopmentScene;
