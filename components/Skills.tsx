import styles from "../styles/Skills.module.css";

const Skills = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div
      style={{
        height: "40rem",
        display: "grid",
        gridTemplateRows: "1fr 3fr",
        gridRowGap: "1rem",
        placeItems: "center",
      }}
    >
      <h1 className={styles.heading}>{title}</h1>
      <p
        style={{
          textAlign: "justify",
          flex: 1,
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default Skills;
