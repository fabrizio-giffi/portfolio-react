import { Box, IconButton } from "@mui/material";
import DeanTown from "./DeanTown";
import JuniorJobs from "./JuniorJobs";
import YeOldeJack from "./YeOldeJack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSpring, animated } from "@react-spring/web";

function WorkPopper({ display, setDisplay }) {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset: true,
    config: {
      mass: 1,
      friction: 45,
      tension: 120,
    },
  });

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
            {display === "top" && (
              <animated.div style={props}>
                <JuniorJobs />
              </animated.div>
            )}
            {display === "center" && (
              <animated.div style={props}>
                <DeanTown />
              </animated.div>
            )}
            {display === "bottom" && (
              <animated.div style={props}>
                <YeOldeJack />
              </animated.div>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default WorkPopper;
