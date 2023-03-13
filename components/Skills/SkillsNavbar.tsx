import styles from "../../styles/Section.module.scss";

const SkillsNavbar = ({ activeScene }: { activeScene: number }) => {
  return (
    <nav className={styles.skillsNavbar}>
      <ul>
        <li>
          <a href="#dataScience">
            <Circle filled={activeScene === 0} />
          </a>
        </li>
        <li>
          <a href="#webDevelopment">
            <Circle filled={activeScene === 1} />
          </a>
        </li>
        <li>
          <a href="#development">
            <Circle filled={activeScene === 2} />
          </a>
        </li>
        <li>
          <a href="#design">
            <Circle filled={activeScene === 3} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Circle = ({ filled }: { filled?: boolean }) => {
  return (
    <span
      className="material-symbols-outlined"
      style={{
        fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0",
        fontSize: "1.5rem",
      }}
    >
      circle
    </span>
  );
};

export default SkillsNavbar;
