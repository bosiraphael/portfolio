import CubeScene from "./CubeScene/CubeScene";

const DevelopmentScene = () => {
  return (
    <CubeScene
      title="Development"
      description="c, c++, c#, java, matlab, sql, vscode, android studio, docker, github"
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
