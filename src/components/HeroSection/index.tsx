import { Box, Button, Typography } from "@mui/material";
import type { FunctionComponent } from "react";

const HeroSection: FunctionComponent = () => {
  return (
    <Box
      sx={
        {
          // backgroundImage: `url(/images/hero.svg)`,
          // backgroundRepeat: "no-repeat",
        }
      }
    >
      <Box
        component="img"
        src="/images/hero.svg"
        sx={{
          position: "absolute",
          top: { xs: -74, sm: 0 },
          left: 0,
          right: 0,
          width: "100%",
          zIndex: -1,
          height: { xs: "100%", md: "unset" },
          maxHeight: "1500px",
        }}
      ></Box>

      <Box
        display="flex"
        gap={{ xs: "82px", sm: 5 }}
        mt={{ xs: "92px", sm: "144px" }}
        alignItems="center"
        flexDirection={{ xs: "column", md: "row" }}
        // mb={90}
      >
        <Box flex={1}>
          <Typography
            textAlign="center"
            fontSize={{ xs: 35, md: 70 }}
            sx={{
              background:
                "linear-gradient(87.58deg, #6100FF 2.97%, #FFF95E 47.72%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
              "background-clip": "text",
              "text-fill-color": "transparent",
            }}
            fontWeight={500}
          >
            Your Gateway Into
          </Typography>
          <Typography
            textAlign="center"
            fontSize={{ xs: 35, md: 70 }}
            sx={{
              background:
                "linear-gradient(87.58deg, #6100FF 2.97%, #FFF95E 47.72%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
              "background-clip": "text",
              "text-fill-color": "transparent",
            }}
            fontWeight={500}
          >
            the Base
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" mt={{ xs: "33%", xl: "59%" }}>
        <Button
          variant="contained"
          sx={{
            background: "#FFF95E !important",
            color: "black !important",
            py: { xs: "20px", md: "35px" },
            px: { xs: "0", sm: "162px" },
            fontSize: "20px",
            fontWeight: 500,
            width: { xs: "100%", sm: "inherit" },
          }}
        >
          Launch App
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
