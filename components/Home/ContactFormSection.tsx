import { useMemo, useRef } from "react";
import ContactForm from "./ContactForm";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

const ContactFormSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useMemo(() => useParallax(scrollYProgress, 200), [scrollYProgress]);

  return (
    <div
      ref={ref}
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
        <motion.img
          src="lapland.jpeg"
          alt="Lapland"
          style={{
            position: "absolute",
            top: "-100vh",
            objectFit: "cover",
            width: "100%",
            y,
          }}
        />
      </div>
      <div
        ref={ref}
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
        <h1>A project in mind?</h1>
        <h1>Contact me</h1>
      </div>

      <ContactForm />
    </div>
  );
};

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default ContactFormSection;
