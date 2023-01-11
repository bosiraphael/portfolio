import { useScroll } from "@react-three/drei";

const DiscoverButton = () => {
  const scroll = useScroll();
  return (
    <button
      onClick={() => {}}
      style={{
        position: "absolute",
        top: "80vh",
        left: "50%",
        width: "15rem",
        height: "15rem",
        transform: "translate(-50%, -50%)",
        cursor: "pointer",
        fontSize: "2rem",
        color: "black",
        zIndex: 100,
        backgroundColor: "white",
        border: "none",
        borderRadius: "50%",
      }}
    >
      Discover
    </button>
  );
};

export default DiscoverButton;
