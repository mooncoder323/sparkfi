import { Box, Button, Typography } from "@mui/material";
import type { FunctionComponent } from "react";

const ApplyForLaunch: FunctionComponent = () => {
  return (
    <Box
      mb={{ xs: "80px", md: "160px" }}
      px={2}
      py={{ xs: "60px", md: "90px" }}
      sx={{
        backgroundImage: "url(/images/footer-bg.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Typography
        fontSize={{ xs: "30px", md: "40px" }}
        fontWeight={500}
        mb="35px"
        textAlign="center"
      >
        APPLY FOR PROJECT INCUBATION
      </Typography>
      <Typography
        textAlign="center"
        sx={{ maxWidth: "740px", margin: "0 auto" }}
      >
        Join the SparkFi community to access support with your financials,
        marketing, and development needs. We provide best-in-class incubation
        tools and advisory to bring the vision of founders and creators to
        fruition for the benefit of all.
      </Typography>

      <Box display="flex" justifyContent="center" mt="32px">
        <Button
          variant="contained"
          sx={{
            background: "#FFF95E !important",
            color: "black !important",
            py: { xs: "20px", md: "35px" },
            px: { xs: "0", md: "162px" },
            fontSize: "20px",
            fontWeight: 500,
            width: { xs: "100%", md: "inherit" },
          }}
        >
          Apply for Launch
        </Button>
      </Box>
    </Box>
  );
};

export default ApplyForLaunch;
