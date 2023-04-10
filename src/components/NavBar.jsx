import { Box, Container, List, ListItem, Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function NavBar() {
  const [secondPage, setSecondPage] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const changeStyle = () => {
    if (location.hash === "#work") {
      setSecondPage(true);
    } else {
      setSecondPage(false);
    }
  };

  useEffect(() => {
    changeStyle();
  }, [location]);

  return (
    <nav className={secondPage ? "scroll" : "first"}>
      <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box>
          {theme === "light" ? (
            <DarkModeIcon sx={{ cursor: "pointer" }} onClick={toggleTheme} fontSize="large" />
          ) : (
            <LightModeIcon sx={{ cursor: "pointer" }} onClick={toggleTheme} fontSize="large" />
          )}
        </Box>
        <Stack direction="row" spacing={7} sx={{ display: "flex", alignItems: "center" }}>
          <List dense sx={{ display: "flex" }} id="navMenu">
            <ListItem data-menuanchor="about" className="active" onClick={changeStyle}>
              <Typography variant="h6">
                <a href="#about">About</a>
              </Typography>
            </ListItem>
            <ListItem data-menuanchor="work" onClick={changeStyle}>
              <Typography variant="h6">
                <a href="#work">Work</a>
              </Typography>
            </ListItem>
            <ListItem data-menuanchor="contact" onClick={changeStyle}>
              <Typography variant="h6">
                <a href="#contact">Contact</a>
              </Typography>
            </ListItem>
          </List>
          <Stack direction="row" spacing={2}>
            <Link to="https://www.linkedin.com/in/fabrizio-giffi" target="_blank">
              <LinkedInIcon fontSize="large" />
            </Link>
            <Link to="https://github.com/fabrizio-giffi" target="_blank">
              <GitHubIcon fontSize="large" />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </nav>
  );
}

export default NavBar;
