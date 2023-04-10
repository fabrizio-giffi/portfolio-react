import { Box, Container, IconButton } from "@mui/material";
import DeanTown from "./DeanTown";
import JuniorJobs from "./JuniorJobs";
import YeOldeJack from "./YeOldeJack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function WorkPopper({ display, setDisplay }) {
  return (
    <>
      <Box sx={{ minWidth: "70%", height: "calc(100% - 2.5rem)" }}>
        <Box sx={{ height: "100%", boxSizing: "border-box", py: 7, px: 10, display: "flex", flexDirection: "column" }}>
          <IconButton sx={{ alignSelf: "start" }} onClick={() => setDisplay("main")}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
          <Box sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            {display === "top" && <JuniorJobs />}
            {display === "center" && <DeanTown />}
            {display === "bottom" && <YeOldeJack />}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default WorkPopper;
