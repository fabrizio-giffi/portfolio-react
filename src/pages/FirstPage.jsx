import { Box, Button, Container, Typography } from "@mui/material";
import "./firstpage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function FirstPage() {
  const { theme } = useContext(ThemeContext);
  return (
    <Container sx={{ display: "flex", maxHeight: "100vh", alignItems: "center", justifyContent: "space-around" }}>
      <Box>
        <Typography variant="h1">Fabrizio Giffi</Typography>
        <Typography
          mb={3}
          variant="h4"
          sx={{ color: theme === "light" ? "var(--text-secondary) !important" : "var(--snow) !important" }}
        >
          {"< Junior full-stack web developer />"}
        </Typography>
        <Button variant="contained">
          <Link to="/CV-FabrizioGiffi.pdf" target="_blank">
            Download Resumé
          </Link>
        </Button>
      </Box>
      <Box className="ctn-profile">
        <img src="https://res.cloudinary.com/dujsafeed/image/upload/v1681654707/noBG_ct8mvq.png" alt="Profile" />
        <div className="bkgr"></div>
      </Box>
    </Container>
  );
}

export default FirstPage;
