import { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";
import styles from "../../styles/Home.module.scss";
import { Trans, useTranslation } from "next-i18next";
import { motion } from "framer-motion";

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
        <motion.h1
          className={styles.sectionTitle}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {t("aProjectInMind")}
        </motion.h1>
        <motion.p
          className={styles.sectionText}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
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
        </motion.p>
      </div>

      <ContactForm />
    </div>
  );
};

export default ContactFormSection;
