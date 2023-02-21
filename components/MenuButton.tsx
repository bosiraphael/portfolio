import { motion } from "framer-motion";
const MenuButton = ({ isOpened, setIsOpened }) => {
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
        <motion.path
          d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"
          fill="#fff"
          stroke="#fff"
        />
      </svg>
    </button>
  );
};

export default MenuButton;
