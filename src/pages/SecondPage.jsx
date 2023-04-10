import { Box, Divider, Typography } from "@mui/material";
import "./secondpage.css";
import { useState } from "react";
import WorkMain from "../components/WorkMain";
import WorkPopper from "../components/WorkPopper";

function SecondPage() {
  const [display, setDisplay] = useState("main");

  return (
    <Box
      component="section"
      sx={{ display: "flex", position: "relative", height: "calc(100vh - 5rem)", width: "100%", alignItems: "end" }}
    >
      {display === "main" ? <WorkMain /> : <WorkPopper display={display} setDisplay={setDisplay} />}
      <Box
        sx={{
          minWidth: "30%",
          height: "calc(100% - 2.5rem)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Divider />
        <Box className={display === "top" ? "work clicked" : "work"} id="top" onClick={() => setDisplay("top")}>
          <Typography id="topZoom" variant="h4">
            Junior Jobs
          </Typography>
        </Box>
        <Divider />
        <Box className={display === "center" ? "work clicked" : "work"} id="center" onClick={() => setDisplay("center")}>
          <Typography id="centerZoom" variant="h4">
            Dean Town
          </Typography>
        </Box>
        <Divider />
        <Box className={display === "bottom" ? "work clicked" : "work"} id="bottom" onClick={() => setDisplay("bottom")}>
          <Typography id="bottomZoom" variant="h4">
            Ye OldeJack
          </Typography>
        </Box>
        <Divider />
      </Box>
    </Box>
  );
}

export default SecondPage;
