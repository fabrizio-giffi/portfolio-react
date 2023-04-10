import { Box, Typography } from "@mui/material";

function YeOldeJack() {
  return (
    <>
      <Box className="background olde" sx={{ width: "100%", height: "100%" }}></Box>
      <Typography variant="h4">Ye OldeJack</Typography>
      <Typography>
        Ye OldeJack is a browser card game based on modern Blackjack rules. The game runs on basic JavaScript, HTML and CSS and
        relies on DOM manipulation and object oriented programming.
      </Typography>
    </>
  );
}

export default YeOldeJack;
