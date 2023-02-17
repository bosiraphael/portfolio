import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import LanguageSelect from "./LanguageSelect";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const router = useRouter();

  const { t } = useTranslation();

  const [isBlack, setIsBlack] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);

  const listener = () => {
    if (navbarRef.current) {
      const b = window.scrollY > window.innerHeight / 2;

      setIsBlack(b);
    }
  };

  useEffect(() => {
    if (router.pathname === "/") {
      setIsBlack(false);
      window.addEventListener("scroll", listener);

      return () => {
        window.removeEventListener("scroll", listener);
      };
    } else {
      setIsBlack(true);
    }
  }, [router.pathname]);

  return (
    <nav
      className="navbar"
      ref={navbarRef}
      style={{
        color: isBlack ? "black" : "white",
      }}
    >
      <Link className="navbar__links" href="/">
        <Image
          src={isBlack ? "/rb.svg" : "/rbwhite.svg"}
          alt="Raphaël Bosi's logo"
          width={40}
          height={40}
          className="navbar__logo"
        />
      </Link>
      <Link className="navbar__links" href="/education-work">
        {t("educationWork")}
      </Link>
      <Link className="navbar__links" href="/skills">
        {t("skills")}
      </Link>
      <Link className="navbar__links" href="/projects">
        {t("projects")}
      </Link>
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
        {t("contact")}
      </button>
      <LanguageSelect />
    </nav>
  );
};

export default Navbar;
