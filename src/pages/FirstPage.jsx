import { Box, Button, Container, Typography } from "@mui/material";
import "./firstpage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function FirstPage() {
  const { theme } = useContext(ThemeContext);
  return (
    <Container sx={{ display: "flex", alignItems: "end", justifyContent: "space-around", mb: 13 }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h1">Fabrizio Giffi</Typography>
        <Typography
          variant="h4"
          sx={{ color: theme === "light" ? "var(--text-secondary) !important" : "var(--snow) !important", mb: 3 }}
        >
          {"< Junior full-stack web developer />"}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: theme === "light" ? "var(--text-secondary) !important" : "var(--snow) !important",
            textAlign: "center",
            mb: 3,
          }}
        >
          Italian living in Germany // Musician and avid gamer
          <br />
          Open to work, both in full-time or freelance positions
        </Typography>
        <Button size="large" variant="contained">
          <Link to="/CV-FabrizioGiffi.pdf" target="_blank">
            Download Resume
          </Link>
        </Button>
      </Box>
      <Box sx={{ px: 6 }} className="ctn-profile">
        <img src="https://res.cloudinary.com/dujsafeed/image/upload/v1681654707/noBG_ct8mvq.png" alt="Profile" />
        <div className="bkgr"></div>
      </Box>
    </Container>
  );
}

export default FirstPage;
