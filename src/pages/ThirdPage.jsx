import { Alert, Box, Button, Container, Divider, Stack, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import { send } from "emailjs-com";
import "./thirdpage.css";

const mailerService = import.meta.env.VITE_EMAIL_SERVICE;
const mailerTemplate = import.meta.env.VITE_EMAIL_TEMPLATE;
const mailerKey = import.meta.env.VITE_EMAIL_KEY;

function ThirdPage() {
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [succesful, setSuccesful] = useState(false);
  const [failed, setFailed] = useState(false);

  const { theme } = useContext(ThemeContext);

  const sendMessage = (event) => {
    event.preventDefault();
    if (contact === "" || email === "" || message === "") {
      setFailed(true);
      return;
    }
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
      {!succesful ? (
        <>
          <Typography variant="h2">Let's work together!</Typography>
          <Box component="form" method="POST" sx={{ width: "100%", p: 4 }} onSubmit={(event) => sendMessage(event)}>
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
            {failed && (
              <Alert sx={{ mb: 2 }} severity="error">
                Please fill the fields with valid info.
              </Alert>
            )}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button sx={{ width: "30%" }} size="large" variant="contained" type="submit">
                <span>Send</span>
              </Button>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Typography variant="h2" sx={{ textAlign: "center", mb: 2 }}>
            Thanks for contacting me!
          </Typography>
          <Typography variant="h4" sx={{ color: "var(--text-secondary)", textAlign: "center" }}>
            I'll get back to you as soon as possible
          </Typography>
          <Divider sx={{ bgcolor: "var(--text-secondary)", my: 4 }} flexItem orientation="horizontal" />
          <Typography variant="h6" sx={{ color: "var(--text-secondary)", textAlign: "center", mb: 2 }}>
            Let's connect on social media in the meantime
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link title="LinkedIn" to="https://www.linkedin.com/in/fabrizio-giffi" target="_blank">
              <LinkedInIcon fontSize="large" sx={{ color: "var(--text-primary)" }} />
            </Link>
            <Link title="GitHub" to="https://github.com/fabrizio-giffi" target="_blank">
              <GitHubIcon fontSize="large" sx={{ color: "var(--text-primary)" }} />
            </Link>
          </Stack>
        </>
      )}
    </Container>
  );
}

export default ThirdPage;
