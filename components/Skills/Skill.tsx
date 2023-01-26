import styles from "../../styles/Section.module.css";

const Skill = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className={styles.subheading}>{title}</h1>
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

export default Skill;
