import { motion } from "framer-motion";
import styles from "../styles/Section.module.scss";
import LogoTextScene from "./LogoTextScene/LogoTextScene";

const EducationWorkItem = ({
  title,
  description,
  modelPath,
  modelText,
  modelScale,
  date,
}: {
  title: string;
  description: string | JSX.Element;
  modelPath?: string;
  modelText?: string;
  modelScale?: number;
  date: string;
}) => {
  return (
    <>
      <div className={styles.educationDate}>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {date}
        </motion.p>
      </div>

      <motion.div
        style={{ height: "100%", width: "100%" }}
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
      >
        <LogoTextScene
          modelPath={modelPath}
          text={modelText}
          scale={modelScale}
        />
      </motion.div>

      <motion.div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.h1
          className={styles.subheading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h1>
        <motion.p
          style={{
            textAlign: "justify",
            flex: 1,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      </motion.div>
    </>
  );
};

export default EducationWorkItem;
