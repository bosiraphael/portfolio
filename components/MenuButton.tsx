import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { useFlubber } from "../utils/useFlubber";

const paths: [string, string] = [
  "M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z",
  "m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z",
];
const colors = ["#ffffff", "#000000"];

const MenuButton = ({
  isOpened,
  setIsOpened,
}: {
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
}) => {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, [0, 1], colors);
  const path = useFlubber(progress, paths);

  useEffect(() => {
    const animation = animate(progress, isOpened ? 1 : 0, {
      duration: 0.5,
      ease: "easeInOut",
      onComplete: () => {
        setPathIndex(isOpened ? 1 : 0);
      },
    });
  }, [isOpened]);

  return (
    <button
      className="navbar__hamburger"
      onClick={() => {
        setIsOpened(!isOpened);
      }}
      style={{
        position: "fixed",
        top: "1rem",
        right: "1rem",
        zIndex: 100000,
        background: "none",
        border: "none",
        outline: "none",
        cursor: "pointer",
      }}
    >
      <svg width="40" height="40" viewBox="0 0 960 960">
        <motion.path d={path} fill={fill} />
      </svg>
    </button>
  );
};

export default MenuButton;
