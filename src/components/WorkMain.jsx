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
      <Typography color="var(--text-primary)" variant="h2">
        Creative and detail-oriented
      </Typography>
      <Typography color="var(--text-primary)" variant="h4">
        Bla bla bla some text
      </Typography>
      <Typography color="var(--text-primary)" variant="h4">
        Maybe some creative effect like text writing itself
      </Typography>
    </Box>
  );
}

export default WorkMain;
