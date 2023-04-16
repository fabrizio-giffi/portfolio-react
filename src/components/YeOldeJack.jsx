import { Box, Divider, Stack, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

function YeOldeJack({ theme }) {
  return (
    <>
      <Box className="background olde" sx={{ width: "100%", height: "100%" }}></Box>
      <Box sx={{ px: 5 }}>
        <Typography variant="h4" textAlign="center" my={1}>
          Ye OldeJack
        </Typography>
        <Typography variant="h6" color="var(--text-secondary)" textAlign="center">
          JavaScript · HTML · CSS · Bootstrap
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography mb={2}>
          Ye OldeJack is a <strong>browser card game</strong> based on modern Blackjack rules.
          <br />
          This is the first sprint-like project that we were asked to deliver as part of the Ironhack bootcamp: with just a few
          options in our toolbelt, the goal was to create a simple browser game in a week's time.
        </Typography>
        <Typography>
          The game runs on basic <strong>JavaScript</strong>, <strong>HTML</strong> and <strong>CSS</strong> and relies on{" "}
          <strong>DOM manipulation</strong> and <strong>object-oriented programming</strong>.
        </Typography>
        <Typography variant="subtitle2" textAlign="end">
          Gamble responsibly!
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Stack direction="row" spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Link to="https://fabrizio-giffi.github.io/Ye-OldeJack" target="_blank">
            <LanguageIcon sx={{ color: theme === "light" ? "var(--text-primary)" : "var(--snow)" }} fontSize="large" />
          </Link>
          <Link to="https://github.com/fabrizio-giffi/Ye-OldeJack" target="_blank">
            <GitHubIcon sx={{ color: theme === "light" ? "var(--text-primary)" : "var(--snow)" }} fontSize="large" />
          </Link>
        </Stack>
      </Box>
    </>
  );
}

export default YeOldeJack;
