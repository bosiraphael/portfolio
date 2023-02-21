import { interpolate } from "flubber";
import {
  motion,
  useMotionValue,
  MotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useState } from "react";

const paths = [
  "M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z",
  "m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z",
];
const colors = ["#ffffff", "#000000"];

function useFlubber(progress: MotionValue<number>) {
  return useTransform(progress, [0, 1], paths, {
    mixer: (a, b) => interpolate(a, b),
  });
}

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
  const path = useFlubber(progress);

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
