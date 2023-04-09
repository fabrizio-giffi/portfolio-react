import { Box, Typography } from "@mui/material";
import "./secondpage.css";
import { useState } from "react";

function SecondPage() {
  const [leftHover, setLeftHover] = useState(false);
  const [centerHover, setCenterHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  return (
    <Box sx={{ height: "100vh" }}>
      <Box className="work" id="left" onMouseEnter={() => setLeftHover(true)} onMouseLeave={() => setLeftHover(false)}>
        <Typography variant="h4">Junior Jobs</Typography>
        {leftHover && (
          <Typography>
            Junior Jobs is a job platform for users to connect with companies - and apply for junior developer positions - and for
            companies to discover new talents to fill their vacancies. The client runs on React while the server and the REST APIs
            run on Express.js. The project has been showcased during the Hackshow on March 29th, 2023 in front of a live audience
            of 150 people and has been voted for the best project in the Web Development category.
          </Typography>
        )}
      </Box>
      <Box className="work" id="center" onMouseEnter={() => setCenterHover(true)} onMouseLeave={() => setCenterHover(false)}>
        <Typography variant="h4">Dean Town</Typography>
        {centerHover && (
          <Typography>
            Built with the Express.js framework and the EJS templating engine, Dean Town is a mock-up project for an e-commerce
            clothing store with a modern minimalistic design.
          </Typography>
        )}
      </Box>
      <Box className="work" id="right" onMouseEnter={() => setRightHover(true)} onMouseLeave={() => setRightHover(false)}>
        <Typography variant="h4">Ye OldeJack</Typography>
        {rightHover && (
          <Typography>
            Ye OldeJack is a browser card game based on modern Blackjack rules. The game runs on basic JavaScript, HTML and CSS
            and relies on DOM manipulation and object oriented programming.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default SecondPage;
