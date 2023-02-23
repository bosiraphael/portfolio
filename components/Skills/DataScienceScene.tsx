import CubeScene from "./CubeScene/CubeScene";

const DataScienceScene = () => {
  return (
    <CubeScene
      title="Data Science"
      description="python, R, pytorch, tensorflow, keras, sklearn, pandas, numpy, matplotlib, seaborn"
      textures={[
        "logos/skills/python.png",
        "logos/skills/R.png",
        "logos/skills/pytorch.png",
        "logos/skills/tensorflow.png",
        "logos/skills/keras.png",
        "logos/skills/sklearn.png",
        "logos/skills/pandas.png",
        "logos/skills/numpy.png",
        "logos/skills/matplotlib.png",
        "logos/skills/seaborn.png",
      ]}
    />
  );
};

export default DataScienceScene;
