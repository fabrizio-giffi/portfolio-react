import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import { useContext, useState } from "react";
import { send } from "emailjs-com";
import { ThemeContext } from "../context/ThemeContext";
import "./thirdpage.css";

const mailerService = import.meta.env.VITE_EMAIL_SERVICE;
const mailerTemplate = import.meta.env.VITE_EMAIL_TEMPLATE;
const mailerKey = import.meta.env.VITE_EMAIL_KEY;

function ThirdPage() {
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [succesful, setSuccesful] = useState(false);

  const { theme } = useContext(ThemeContext);

  const sendMessage = (event) => {
    event.preventDefault();
    const toSend = { from_name: contact, message: message, reply_to: email };
    send(mailerService, mailerTemplate, toSend, mailerKey)
      .then((response) => {
        console.log(response.status, "Message succesfully sent ");
        setSuccesful(true);
      })
      .catch((error) => {
        console.log("Something went wrong: ", error);
      });
  };

  return (
    <Container maxWidth="sm" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="stripe"></div>
      <Typography variant="h2">Let's work together!</Typography>
      <Box component="form" sx={{ width: "100%", p: 4 }} onSubmit={(event) => sendMessage(event)}>
        <Stack direction="row" spacing={2} sx={{ width: "100%", display: "flex", alignItems: "center", mb: 2 }}>
          <AccountCircleIcon fontSize="large" sx={{ color: theme === "dark" ? "var(--snow)" : "var(--text-secondary)" }} />
          <TextField fullWidth label="Contact info" variant="filled" onChange={(event) => setContact(event.target.value)} />
        </Stack>

        <Stack direction="row" spacing={2} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <EmailIcon fontSize="large" sx={{ color: theme === "dark" ? "var(--snow)" : "var(--text-secondary)" }} />
          <TextField fullWidth label="Email address" variant="filled" onChange={(event) => setEmail(event.target.value)} />
        </Stack>
        <Stack sx={{ mb: 2 }}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Your message"
            variant="filled"
            onChange={(event) => setMessage(event.target.value)}
          />
        </Stack>
        <Button variant="contained" type="submit">
          <span>Send</span>
        </Button>
      </Box>
    </Container>
  );
}

export default ThirdPage;
