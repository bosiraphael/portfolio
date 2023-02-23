import CubeScene from "./CubeScene/CubeScene";

const WebDevelopmentScene = () => {
  return (
    <CubeScene
      title="Web Development"
      description="html, css, javascript, typescript, react, next, nodejs, sass, firebase, threejs"
      textures={[
        "logos/skills/html.png",
        "logos/skills/css.png",
        "logos/skills/javascript.png",
        "logos/skills/typescript.png",
        "logos/skills/react.png",
        "logos/skills/next.png",
        "logos/skills/nodejs.png",
        "logos/skills/sass.png",
        "logos/skills/firebase.png",
        "logos/skills/threejs.png",
      ]}
    />
  );
};

export default WebDevelopmentScene;
