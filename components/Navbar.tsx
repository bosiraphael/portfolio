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
      <Link className="navbar__links" href="/#education">
        Education
      </Link>
      <Link className="navbar__links" href="/#work">
        Work experiences
      </Link>
      <Link className="navbar__links" href="/#skills">
        Skills
      </Link>
      <Link className="navbar__links" href="/#contacts">
        Contacts
      </Link>
    </nav>
  );
};

export default Navbar;
