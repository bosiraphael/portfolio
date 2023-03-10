import { useState } from "react";
import styles from "../../styles/ContactForm.module.css";
import { Button, Stack, TextField, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

const ContactForm = () => {
  const { t } = useTranslation("home");

  const theme = createTheme({
    palette: {
      primary: {
        main: "#183f1b",
      },
      secondary: {
        main: "#ffffff",
      },
    },
    typography: {
      htmlFontSize: 10,
    },
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setMessageSent(true);
  };

  return (
    <>
      {messageSent ? (
        <MessageSent t={t} />
      ) : (
        <motion.form
          className={styles.contactForm}
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          data-netlify="true"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
          viewport={{ once: true }}
        >
          <h1>{t("getInTouch")}</h1>
          <ThemeProvider theme={theme}>
            <Stack spacing={2} style={{ width: "100%" }}>
              <TextField
                label={t("name")}
                name="name"
                variant="outlined"
                style={{
                  width: "100%",
                }}
                onChange={handleChange}
              />

              <TextField
                label={t("email")}
                name="email"
                variant="outlined"
                style={{
                  width: "100%",
                }}
                onChange={handleChange}
              />

              <TextField
                label={t("message")}
                name="message"
                multiline
                rows={4}
                variant="outlined"
                style={{
                  width: "100%",
                }}
                onChange={handleChange}
              />

              <Button
                variant="contained"
                color="primary"
                style={{
                  width: "100%",
                }}
                type="submit"
              >
                {t("send")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 96 960 960"
                  width="20"
                  fill="#ffffff"
                  style={{
                    marginLeft: "1rem",
                  }}
                >
                  <path d="M120 896V256l760 320-760 320Zm60-93 544-227-544-230v168l242 62-242 60v167Zm0 0V346v457Z" />
                </svg>
              </Button>
            </Stack>
          </ThemeProvider>
        </motion.form>
      )}
    </>
  );
};

const animation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const MessageSent = ({ t }: { t: (arg0: string) => any }) => {
  return (
    <div className={styles.messageSent}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        height="100"
        viewBox="0 96 960 960"
        width="100"
        fill="#183f1b"
        variants={animation}
        initial="hidden"
        animate="show"
      >
        <path d="M633 976 472 815l43-43 118 118 244-244 43 43-287 287ZM478 529l334-213H144l334 213Zm0 60L140 372v452h256l60 60H140q-24 0-42-18t-18-42V316q0-24 18-42t42-18h677q24 0 42 18t18 42v244l-60 60V372L478 589Zm1 9Zm-1-69Zm1 60Z" />
      </motion.svg>

      <h1>{t("messageSent")}</h1>
      <p>{t("messageSentText")}</p>
    </div>
  );
};

export default ContactForm;
