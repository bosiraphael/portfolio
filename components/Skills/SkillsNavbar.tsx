import styles from "../../styles/Section.module.scss";
import { useMediaQuery } from "@mui/material";

const SkillsNavbar = ({ activeScene }: { activeScene: number }) => {
  return (
    <nav className={styles.skills__navbar}>
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
  const isMobile = useMediaQuery("(max-width: 728px)");

  return (
    <span
      className="material-symbols-outlined"
      style={{
        fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0",
        fontSize: isMobile ? "1rem" : "1.5rem",
        backgroundColor: "#fff",
        borderRadius: "50%",
      }}
    >
      circle
    </span>
  );
};

export default SkillsNavbar;
