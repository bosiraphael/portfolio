import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
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
