import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copywrite">
        &copy; {new Date().getFullYear()} Raphaël Bosi. ALL RIGHTS RESERVED.
      </div>
      <div className="footer__socials">
        <a
          href="mailto:contact@raphaelbosi.dev"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="socials/mail.svg" alt="Mail" width={40} height={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/rapha%C3%ABl-bosi-8b704a173/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="socials/linkedin.svg"
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
            src="socials/github.svg"
            alt="LinkedIn"
            width={40}
            height={40}
          />
        </a>
        <a href="https://www.malt.fr/profile/raphaelbosi">
          <Image src="socials/malt.svg" alt="Malt" width={40} height={40} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
