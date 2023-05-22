import { Box, Typography } from "@mui/material";
import type { FunctionComponent } from "react";

const Abilities: FunctionComponent = () => {
  return (
    <Box
      display="flex"
      gap={2}
      mt="144px"
      alignItems="center"
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Box>
        <Typography
          fontSize={40}
          mb={{ xs: "16px", md: "46px" }}
          fontWeight={600}
        >
          What SparkFi does?
        </Typography>
        <Typography fontWeight={500}>
          SparkFi is an influential decentralized launchpad platform that
          utilizes the Base blockchain to provide a robust platform for
          launching innovative blockchain projects. The platform is tailor-made
          to offer significant growth opportunities to new projects on the
          network. By possessing a specific amount of SPAK tokens, users can
          participate in any launch on SparkFi, giving them early investment
          opportunities in projects and early token price discounts. Apart from
          being a launchpad for new blockchain projects, SparkFi also serves as
          a vital link between investors searching for new and promising
          projects to invest in and those projects seeking a platform to launch
          and scale their tokens quickly and efficiently. With its user-friendly
          interface and advanced functionalities, SparkFi has rapidly become the
          preferred platform for innovative blockchain projects that aim to get
          started and achieve their full potential.
        </Typography>
      </Box>
      <Box position="relative">
        <Box
          position="absolute"
          sx={{
            top: "20%",
            left: "20%",
            right: "20%",
            bottom: "20%",
            zIndex: -1,
            filter: "blur(45px)",
            background:
              "linear-gradient(138deg, rgb(97 0 255), rgb(244 12 193))",
            borderRadius: "50%",
          }}
        ></Box>
        <img src="/images/donut.svg" alt="donut" />
      </Box>
    </Box>
  );
};

export default Abilities;
