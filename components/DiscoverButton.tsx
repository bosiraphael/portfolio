import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const DiscoverButton = () => {
  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }}
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
