import { Button, Card, Container, Stack, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";

const password = import.meta.env.NODEMAILER_APP;

function ThirdPage() {
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [succesful, setSuccesful] = useState(false);

  const sendMessage = () => {
    return;
  };

  return (
    <Container maxWidth="sm" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h2">Get in touch</Typography>
      <Card component="form" sx={{ width: "100%", p: 4 }} onSubmit={sendMessage}>
        <Stack direction="row" spacing={2} sx={{ width: "100%", display: "flex", alignItems: "center", mb: 2 }}>
          <AccountCircleIcon fontSize="large" />{" "}
          <TextField fullWidth label="Contact info" variant="filled" onChange={(event) => setContact(event.target.value)} />
        </Stack>

        <Stack direction="row" spacing={2} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <EmailIcon fontSize="large" />{" "}
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
        <Button
          variant="contained"
          sx={{
            bgcolor: "var(--blue)",
            "&:hover": {
              bgcolor: "var(--tangerine)",
              color: "var(--blue)",
            },
          }}
          type="submit"
        >
          Click
        </Button>
      </Card>
    </Container>
  );
}

export default ThirdPage;
