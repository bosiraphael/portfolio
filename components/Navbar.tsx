import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar__links" href="/">
        Home
      </Link>
      <Link className="navbar__links" href="/education">
        Education
      </Link>
      <Link className="navbar__links" href="/work">
        Work experiences
      </Link>
      <Link className="navbar__links" href="/skills">
        Skills
      </Link>
      <Link className="navbar__links" href="/Contacts">
        Contacts
      </Link>
    </nav>
  );
};

export default Navbar;
