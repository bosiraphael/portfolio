import { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";
import { MotionValue, useTransform } from "framer-motion";
import styles from "../../styles/Home.module.css";

const ContactFormSection = () => {
  const ref = useRef(null);

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
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        overflow: "hidden",
        placeItems: "center",
      }}
    >
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
          src="lapland.webp"
          alt="Lapland"
          style={{
            position: "absolute",
            top: "-100vh",
            objectFit: "cover",
            width: "100%",
          }}
        />
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 5%",
          color: "white",
          background: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <h1 className={styles.sectionTitle} style={{ marginBottom: 0 }}>
          A project in mind?
        </h1>
        <h1 className={styles.sectionTitle}>Contact me</h1>
        <p className={styles.sectionText}>
          If you have a website project in mind for your company, you're in the
          right place. I can help you build a website that will help you grow
          your business. Just fill out the form and I'll get back to you.
          Otherwise, you can contact me at{" "}
          <a
            href="mailto:contact@raphaelbosi.dev"
            style={{
              textDecoration: "underline",
            }}
          >
            contact@raphaelbosi.dev
          </a>{" "}
          .
        </p>
      </div>

      <ContactForm />
    </div>
  );
};

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default ContactFormSection;
