import CubeScene from "./CubeScene/CubeScene";

const DevelopmentScene = () => {
  return (
    <CubeScene
      title="Development"
      description="c, c++, c#, java, matlab, sql, vscode, android studio, docker, github"
      textures={[
        "logos/skills/c.png",
        "logos/skills/cplusplus.png",
        "logos/skills/csharp.png",
        "logos/skills/java.png",
        "logos/skills/matlab.png",
        "logos/skills/sql.png",
        "logos/skills/vscode.png",
        "logos/skills/androidstudio.png",
        "logos/skills/docker.png",
        "logos/skills/github.png",
      ]}
    />
  );
};

export default DevelopmentScene;
