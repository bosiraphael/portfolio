import CubeScene from "./CubeScene/CubeScene";
import { useTranslation } from "next-i18next";

const OthersScene = () => {
  const { t } = useTranslation("skills");
  return (
    <CubeScene
      title={t("others")}
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
