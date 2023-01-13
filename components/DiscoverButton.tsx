const DiscoverButton = () => {
  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }}
      className="discover-button"
    >
      <span
        className="material-symbols-outlined"
        style={{
          fontSize: "5rem",
        }}
      >
        expand_more
      </span>
    </button>
  );
};

export default DiscoverButton;
