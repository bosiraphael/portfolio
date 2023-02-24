import { motion } from "framer-motion";
import { useState } from "react";

const DiscoverButton = () => {
  const [hover, setHover] = useState(false);
  return (
    <motion.button
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="discover-button"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.9,
            duration: 0.5,
            default: { ease: "easeInOut" },
          },
        },
        hidden: {
          opacity: 0,
          y: 20,
        },
      }}
    >
      <motion.span
        className="material-symbols-outlined"
        style={{
          fontSize: hover ? "10rem" : "8rem",
          transition: "all 0.2s ease-in-out",
        }}
      >
        expand_more
      </motion.span>
    </motion.button>
  );
};

export default DiscoverButton;
