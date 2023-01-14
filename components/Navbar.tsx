import Link from "next/link";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const isBlack = () => {
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
      <a className="navbar__links" href="/">
        Home
      </a>
      <a className="navbar__links" href="#education">
        Education
      </a>
      <a className="navbar__links" href="#work">
        Work experiences
      </a>
      <a className="navbar__links" href="#skills">
        Skills
      </a>
      <a className="navbar__links" href="#contacts">
        Contacts
      </a>
    </nav>
  );
};

export default Navbar;
