import { useState } from "react";
import styles from "../styles/ContactForm.module.css";
import { Button, Stack, TextField, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const ContactForm = () => {
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

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <ThemeProvider theme={theme}>
        <Stack spacing={2} style={{ width: "100%" }}>
          <TextField
            label="Name"
            variant="outlined"
            style={{
              width: "100%",
            }}
          />

          <TextField
            label="Email"
            variant="outlined"
            style={{
              width: "100%",
            }}
          />

          <TextField
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            style={{
              width: "100%",
            }}
          />

          <Button
            variant="contained"
            color="primary"
            style={{
              width: "100%",
            }}
          >
            Send
          </Button>
        </Stack>
      </ThemeProvider>
    </form>
  );
};

export default ContactForm;
