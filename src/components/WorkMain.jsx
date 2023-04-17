import { Box, Typography } from "@mui/material";

function WorkMain() {
  return (
    <Box
      sx={{
        minWidth: "70%",
        height: "calc(100% - 2.5rem)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 13,
      }}
    >
      <Typography mb={3} color="var(--text-primary)" variant="h2" textAlign={"center"}>
        Creative and detail-oriented
      </Typography>
      <Typography mb={3} color="var(--text-primary)" variant="h5" textAlign={"center"}>
        As a web developer I strive to find the sweet spot between an aesthetically pleasing interface and a seamlessly
        operating system running in the background.
        <br />I favour a <strong>clean</strong> and <strong>minimalist</strong> design without compromising on{" "}
        <strong>functionality</strong>.
      </Typography>
      <Typography textAlign="center" color="var(--text-primary)" variant="h6" mt={3}>
        Check out my recent works →
      </Typography>
    </Box>
  );
}

export default WorkMain;
