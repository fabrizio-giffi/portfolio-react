import { Box, Divider, Stack, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

function DeanTown({ theme }) {
  return (
    <>
      <Box className="background dean" sx={{ width: "100%", height: "100%" }}></Box>
      <Box sx={{ px: 5 }}>
        <Typography variant="h4" textAlign="center" my={1}>
          Dean Town
        </Typography>
        <Typography variant="h6" color="var(--text-secondary)" textAlign="center" mb={2}>
          Express · Node.js · EJS · MongoDB · JavaScript · HTML · CSS & Bootstrap
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography mb={2}>
          Built on the <strong>Express.js</strong> framework and the <strong>EJS templating engine</strong>, Dean Town is a
          mock-up project for an e-commerce clothing store with a modern minimalistic design.
        </Typography>
        <Typography>
          <Typography variant="button">
            <strong>The website features:</strong>
          </Typography>
          <br />• basic authentication functions and cookies
          <br />• items filtering for the shop section
          <br />• a profile page for customers to review their personal info and shopping history
          <br />• confetti upon completion of a purchase 🎊
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Stack direction="row" spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Link to="https://iron-store.adaptable.app/" target="_blank">
            <LanguageIcon sx={{ color: theme === "light" ? "var(--text-primary)" : "var(--snow)" }} fontSize="large" />
          </Link>
          <Link to="https://github.com/DeanStavenuiter/ironhack-ecommerce" target="_blank">
            <GitHubIcon sx={{ color: theme === "light" ? "var(--text-primary)" : "var(--snow)" }} fontSize="large" />
          </Link>
        </Stack>
      </Box>
    </>
  );
}

export default DeanTown;
