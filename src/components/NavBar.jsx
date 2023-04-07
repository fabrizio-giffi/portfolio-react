import { Box, Container, List, ListItem, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function NavBar() {
  const [firstPage, setFirstPage] = useState(true);
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const changeStyle = () => {
    if (location.hash === "#about") {
      setFirstPage(true);
    } else {
      setFirstPage(false);
    }
  };

  useEffect(() => {
    changeStyle();
  }, [location]);

  return (
    <nav className={firstPage ? "first" : "scroll"}>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          {theme === "light" ? (
            <DarkModeIcon sx={{ cursor: "pointer" }} onClick={toggleTheme} fontSize="large" />
          ) : (
            <LightModeIcon sx={{ cursor: "pointer" }} onClick={toggleTheme} fontSize="large" />
          )}
        </Box>
        <List dense sx={{ display: "flex" }} id="navMenu">
          <ListItem data-menuanchor="about" className="active" onClick={changeStyle}>
            <a href="#about">About</a>
          </ListItem>
          <ListItem data-menuanchor="work" onClick={changeStyle}>
            <a href="#work">Work</a>
          </ListItem>
          <ListItem data-menuanchor="contact" onClick={changeStyle}>
            <a href="#contact">Contact</a>
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
      </Container>
    </nav>
  );
}

export default NavBar;
