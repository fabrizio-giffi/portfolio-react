import { Button, Container, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function NotFound() {
  const { theme } = useContext(ThemeContext);
  return (
    <Container
      maxWidth="md"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", flexDirection: "column" }}
    >
      <Typography variant="h2" sx={{ textAlign: "center", mb: 3, color: theme === "light" && "var(--text-primary)" }}>
        Congrats, you found the <br /> 404 page!
      </Typography>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
        What about going back to the website?
      </Typography>
      <Button size="large" sx={{ width: "20%" }}>
        <Link to="/">Yes, please</Link>
      </Button>
    </Container>
  );
}

export default NotFound;
