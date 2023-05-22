import { Box, Link as MuiLink, Typography } from "@mui/material";
import Link from "next/link";
import type { FunctionComponent } from "react";

const Logo: FunctionComponent = () => {
  return (
    <MuiLink
      component={Link}
      underline="none"
      href="/"
      sx={{ display: "flex", gap: 1, background: "background.default" }}
    >
      <Box position="relative" zIndex={1}>
        <Box
          position="absolute"
          sx={{
            top: "10%",
            left: "10%",
            right: "10%",
            bottom: "10%",
            zIndex: -1,
            filter: "blur(6px)",
            background:
              "linear-gradient(138deg, rgb(97 0 255), rgb(244 12 193))",
            borderRadius: "50%",
          }}
        ></Box>
        <img src="/images/racket.gif" alt="logo" width={34} />
      </Box>

      <Typography fontWeight={600} fontSize={25}>
        SparkFi
      </Typography>
    </MuiLink>
  );
};

export default Logo;
