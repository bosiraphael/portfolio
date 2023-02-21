import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import LanguageSelect from "./LanguageSelect";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuButton from "./MenuButton";

const Navbar = () => {
  const router = useRouter();

  const isMobile = useMediaQuery("(max-width:1000px)");

  const { t } = useTranslation();

  const [isOpened, setIsOpened] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {isMobile && <MenuButton isOpened={isOpened} setIsOpened={setIsOpened} />}
      {isOpened && (
        <nav className="navbar" ref={navbarRef}>
          <Link className="navbar__links" href="/">
            <Image
              src="/rb.svg"
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
      )}
    </>
  );
};

export default Navbar;
