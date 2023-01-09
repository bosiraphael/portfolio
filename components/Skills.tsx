import styles from "../styles/Skills.module.css";

const Skills = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div style={{ height: "100%" }}>
      <h1 className={styles.heading}>{title}</h1>
      <p
        style={{
          textAlign: "justify",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default Skills;
