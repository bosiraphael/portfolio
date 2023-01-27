import { useState } from "react";

const DiscoverButton = () => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="discover-button"
    >
      <span
        className="material-symbols-outlined"
        style={{
          fontSize: hover ? "10rem" : "8rem",
          transition: "all 0.2s ease-in-out",
        }}
      >
        expand_more
      </span>
    </button>
  );
};

export default DiscoverButton;
