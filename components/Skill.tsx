import styles from "../styles/Section.module.css";

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
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 3fr",
        gridRowGap: "1rem",
        placeItems: "center",
      }}
    >
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

export default Skill;
