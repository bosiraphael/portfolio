import Link from "next/link";
import { useRef, useState } from "react";
import Image from "next/image";
import LanguageSelect from "./LanguageSelect";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuButton from "./MenuButton";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const router = useRouter();

  const isMobile = useMediaQuery("(max-width:1000px)");

  const { t } = useTranslation("common");

  const [isOpened, setIsOpened] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {isMobile && <MenuButton isOpened={isOpened} setIsOpened={setIsOpened} />}
      <AnimatePresence>
        {(!isMobile || isOpened) && (
          <motion.nav
            className="navbar"
            ref={navbarRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <NavBarContent t={t} isMobile={isMobile} />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

const NavBarContent = ({
  t,
  isMobile,
}: {
  t: (key: string) => string;
  isMobile: boolean;
}) => {
  return (
    <>
      <Link className="navbar__links" href="/">
        <Image
          src="/rb.svg"
          alt="Raphaël Bosi's logo"
          width={isMobile ? 80 : 40}
          height={isMobile ? 80 : 40}
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
      <LanguageSelect />
    </>
  );
};

export default Navbar;
