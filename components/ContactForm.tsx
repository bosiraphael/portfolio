import { useState } from "react";
import styles from "../styles/ContactForm.module.css";
import { Stack, TextField } from "@mui/material";

const ContactForm = () => {
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
        <button type="submit">Submit</button>
      </Stack>
    </form>
  );
};

export default ContactForm;
