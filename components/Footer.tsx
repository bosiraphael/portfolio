import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copywrite">
        <Image src="icons/rb.svg" alt="LinkedIn" width={40} height={40} />
        <span>
          &copy; {new Date().getFullYear()} Raphaël Bosi. ALL RIGHTS RESERVED.
        </span>
      </div>
      <div className="footer__socials">
        <a
          href="mailto:contact@raphaelbosi.dev"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="icons/socials/mail.svg"
            alt="Mail"
            width={40}
            height={40}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rapha%C3%ABl-bosi-8b704a173/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="icons/socials/linkedin.svg"
            alt="LinkedIn"
            width={40}
            height={40}
          />
        </a>
        <a
          href="https://github.com/bosiraphael"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="icons/socials/github.svg"
            alt="LinkedIn"
            width={40}
            height={40}
          />
        </a>
        <a href="https://www.malt.fr/profile/raphaelbosi">
          <Image
            src="icons/socials/malt.svg"
            alt="Malt"
            width={40}
            height={40}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
