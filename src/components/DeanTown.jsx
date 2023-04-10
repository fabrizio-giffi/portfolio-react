import { Box, Typography } from "@mui/material";

function DeanTown() {
  return (
    <>
      <Box className="background dean" sx={{ width: "100%", height: "100%" }}></Box>
      <Typography variant="h4">Dean Town</Typography>
      <Typography>
        Built with the Express.js framework and the EJS templating engine, Dean Town is a mock-up project for an e-commerce
        clothing store with a modern minimalistic design.
      </Typography>
    </>
  );
}

export default DeanTown;
