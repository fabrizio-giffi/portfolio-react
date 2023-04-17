import { Box, Divider, Stack, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

function JuniorJobs({ theme }) {
  return (
    <>
      <Box className="background junior" sx={{ height: "100%", width: "100%" }}></Box>
      <Box sx={{ px: 5 }}>
        <Typography variant="h4" textAlign="center" my={1}>
          Junior Jobs
        </Typography>
        <Typography variant="h6" color="var(--text-secondary)" textAlign="center" mb={2}>
          React · Rest APIs · Express · Node.js · MongoDB · JavaScript · HTML · CSS
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography mb={2}>
          Junior Jobs is a <strong>job platform</strong> meant for junior developers to connect with companies and apply for
          entry-level positions, and for companies to discover new talents to fill their vacancies.
          <br />
          The client runs on <strong>React</strong>, user interface relies heavily on <strong>Material UI</strong>, server and
          REST APIs run on <strong>Express.js</strong>.
        </Typography>
        <Typography mb={2}>
          🏆{" "}
          <Typography variant="button">
            <strong>Awards:</strong>
          </Typography>
          <br />
          The project was showcased during the Hackshow on March 29th, 2023 in front of a live audience of 150 people and has been
          voted for the <strong>best project</strong> in the <strong>Web Development</strong> category.
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Stack direction="row" spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Link title="Deployed website" to="https://juniorjobs-frontend.netlify.app/" target="_blank">
            <LanguageIcon sx={{ color: theme === "light" ? "var(--text-primary)" : "var(--snow)" }} fontSize="large" />
          </Link>
          <Link title="GitHub repo" to="https://github.com/fabrizio-giffi/juniorjobs-fullstack" target="_blank">
            <GitHubIcon sx={{ color: theme === "light" ? "var(--text-primary)" : "var(--snow)" }} fontSize="large" />
          </Link>
        </Stack>
      </Box>
    </>
  );
}

export default JuniorJobs;
