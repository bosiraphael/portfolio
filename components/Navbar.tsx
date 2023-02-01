import Link from "next/link";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const isBlack = () => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.scrollY > window.innerHeight / 2;
  };

  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        const navbar = navbarRef.current;
        if (navbar) {
          navbar.style.color = isBlack() ? "black" : "white";
        }
      });
    }
  }, []);

  return (
    <nav
      className="navbar"
      ref={navbarRef}
      style={{
        color: isBlack() ? "black" : "white",
      }}
    >
      <Link className="navbar__links" href="/">
        Home
      </Link>
      <button
        className="navbar__links"
        onClick={() => {
          const element = document.getElementById("education");
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
            });
          }
        }}
      >
        Education
      </button>
      <button
        className="navbar__links"
        onClick={() => {
          const element = document.getElementById("work");
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
            });
          }
        }}
      >
        Work experiences
      </button>
      <button
        className="navbar__links"
        onClick={() => {
          const element = document.getElementById("skills");
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
            });
          }
        }}
      >
        Skills
      </button>
      <button
        className="navbar__links"
        onClick={() => {
          const element = document.getElementById("contacts");
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
            });
          }
        }}
      >
        Contacts
      </button>
    </nav>
  );
};

export default Navbar;
