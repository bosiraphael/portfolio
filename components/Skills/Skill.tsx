import { motion } from "framer-motion";
import styles from "../../styles/Section.module.scss";

const EducationWorkItem = ({
  title,
  description,
}: {
  title: string;
  description: string | JSX.Element;
}) => {
  return (
    <motion.div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
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
  );
};

export default EducationWorkItem;
