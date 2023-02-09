import CubeScene from "./CubeScene/CubeScene";

const WebDevelopmentScene = () => {
  return (
    <CubeScene
      title="Web Development"
      description="html, css, javascript, typescript, react, next, nodejs, sass, firebase, threejs"
      textures={[
        "logos/html.png",
        "logos/css.png",
        "logos/javascript.png",
        "logos/typescript.png",
        "logos/react.png",
        "logos/next.png",
        "logos/nodejs.png",
        "logos/sass.png",
        "logos/firebase.png",
        "logos/threejs.png",
      ]}
    />
  );
};

export default WebDevelopmentScene;
