import { Box, IconButton } from "@mui/material";
import JuniorJobs from "./JuniorJobs";
import DeanTown from "./DeanTown";
import YeOldeJack from "./YeOldeJack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

function WorkPopper({ display, setDisplay }) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Box className="work-popper" sx={{ minWidth: "70%", height: "calc(100% - 2.5rem)" }}>
        <Box
          className="ctn"
          sx={{ height: "100%", boxSizing: "border-box", py: 7, px: 10, display: "flex", flexDirection: "column" }}
        >
          <Box
            sx={{
              position: "relative",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <IconButton
              title="Back to the boring text"
              sx={{
                position: "absolute",
                top: 15,
                left: 15,
                zIndex: 2,
                bgcolor: "rgba(0, 0, 0, 0.4) !important",
                "&:hover": { bgcolor: "rgba(0, 0, 0, 0.7) !important", transform: "scale(1.2)", transition: "transform 0.4s" },
              }}
              onClick={() => setDisplay("main")}
            >
              <ArrowBackIcon sx={{ color: "var(--snow)" }} fontSize="medium" />
            </IconButton>
            {display === "top" && <JuniorJobs theme={theme} />}
            {display === "center" && <DeanTown theme={theme} />}
            {display === "bottom" && <YeOldeJack theme={theme} />}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default WorkPopper;
