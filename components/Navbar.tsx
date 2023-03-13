import Link from "next/link";
import { useRef, useState } from "react";
import Image from "next/image";
import LanguageSelect from "./LanguageSelect";
import { useTranslation } from "next-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuButton from "./MenuButton";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const IsTabletOrMobile = useMediaQuery("(max-width:1024px)");

  const { t } = useTranslation("navbar");

  const [isOpened, setIsOpened] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {IsTabletOrMobile && (
        <MenuButton isOpened={isOpened} setIsOpened={setIsOpened} />
      )}
      <AnimatePresence>
        {(!IsTabletOrMobile || isOpened) && (
          <motion.nav
            className="navbar"
            ref={navbarRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <NavBarContent t={t} IsTabletOrMobile={IsTabletOrMobile} />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

const NavBarContent = ({
  t,
  IsTabletOrMobile,
}: {
  t: (key: string) => string;
  IsTabletOrMobile: boolean;
}) => {
  return (
    <>
      <Link className="navbar__links" href="/">
        <Image
          src="/icons/rb.svg"
          alt="Raphaël Bosi's logo"
          width={IsTabletOrMobile ? 80 : 40}
          height={IsTabletOrMobile ? 80 : 40}
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
      <Link className="navbar__links" href="/contact">
        {t("contact")}
      </Link>
      <Link className="navbar__links" href="/credits">
        {t("credits")}
      </Link>
      <LanguageSelect />
    </>
  );
};

export default Navbar;
