import { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";
import styles from "../../styles/Home.module.scss";
import { Trans, useTranslation } from "next-i18next";

const ContactFormSection = () => {
  const ref = useRef(null);
  const { t } = useTranslation("home");

  useEffect(() => {
    const listener = () => {
      const offset = window.scrollY / (window.innerHeight * 3);
      if (ref.current && offset > 1 / 3) {
        ref.current.style.transform = `translateY(${
          (offset - 1 / 3) * window.innerHeight
        }px)`;
      }
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <div className={styles.contactSectionContainer}>
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: -1,
        }}
      >
        <img
          ref={ref}
          src="images/lapland.webp"
          alt="Lapland"
          className={styles.contactSectionImage}
        />
      </div>
      <div className={styles.section}>
        <h1 className={styles.sectionTitle} style={{ marginBottom: 0 }}>
          {t("aProjectInMind")}
        </h1>
        <h1 className={styles.sectionTitle}>{t("contactMe")}</h1>
        <p className={styles.sectionText}>
          <Trans
            i18nKey="contactMeText"
            t={t}
            components={{
              a: (
                <a
                  style={{
                    pointerEvents: "all",
                    color: "white",
                    textDecoration: "underline",
                  }}
                />
              ),
            }}
          />
        </p>
      </div>

      <ContactForm />
    </div>
  );
};

export default ContactFormSection;
