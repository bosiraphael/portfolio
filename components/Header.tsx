import styles from "../styles/Home.module.css";
import LaplandScene from "./LaplandScene/LaplandScene";

const Header = ({ title }: { title: string }) => {
  return (
    <div className={styles.header}>
      <LaplandScene />
      <h1 className={styles.heading}>{title}</h1>
    </div>
  );
};

export default Header;
