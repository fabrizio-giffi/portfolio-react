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
      }}
    >
      <Typography mb={3} color="var(--text-primary)" variant="h2">
        Creative and detail-oriented
      </Typography>
      <Typography mb={3} color="var(--text-primary)" variant="h4">
        Lorem ipsum dolor sit amet.
      </Typography>
      <Typography textAlign="center" color="var(--text-primary)" variant="h6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </Box>
  );
}

export default WorkMain;
