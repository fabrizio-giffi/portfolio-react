import { Box, Stack, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

function JuniorJobs() {
  return (
    <>
      <Box className="background junior" sx={{ height: "100%", width: "100%" }}></Box>
      <Box sx={{ px: 5 }}>
        <Typography variant="h4" textAlign="center">
          Junior Jobs
        </Typography>
        <Typography>
          Junior Jobs is a job platform for users to connect with companies - and apply for junior developer positions - and for
          companies to discover new talents to fill their vacancies. The client runs on React while the server and the REST APIs
          run on Express.js. The project has been showcased during the Hackshow on March 29th, 2023 in front of a live audience of
          150 people and has been voted for the best project in the Web Development category.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link to="https://juniorjobs-frontend.netlify.app/" target="_blank">
            <LanguageIcon sx={{ color: "var(--text-primary)" }} fontSize="large" />
          </Link>
          <Link to="https://github.com/fabrizio-giffi" target="_blank">
            <GitHubIcon sx={{ color: "var(--text-primary)" }} fontSize="large" />
          </Link>
        </Stack>
      </Box>
    </>
  );
}

export default JuniorJobs;
