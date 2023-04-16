import { Box, IconButton } from "@mui/material";
import DeanTown from "./DeanTown";
import JuniorJobs from "./JuniorJobs";
import YeOldeJack from "./YeOldeJack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function WorkPopper({ display, setDisplay }) {
  return (
    <>
      <Box sx={{ minWidth: "70%", height: "calc(100% - 2.5rem)" }}>
        <Box sx={{ height: "100%", boxSizing: "border-box", py: 7, px: 10, display: "flex", flexDirection: "column" }}>
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
              sx={{
                position: "absolute",
                top: 15,
                left: 15,
                zIndex: 2,
                bgcolor: "rgba(0, 0, 0, 0.4)",
                "&:hover": { bgcolor: "rgba(0, 0, 0, 0.7)", transform: "scale(1.2)", transition: "transform 0.4s" },
              }}
              onClick={() => setDisplay("main")}
            >
              <ArrowBackIcon sx={{ color: "var(--snow)" }} fontSize="medium" />
            </IconButton>
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
