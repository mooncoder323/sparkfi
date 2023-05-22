import { Box, Grid, Typography } from "@mui/material";
import type { FunctionComponent } from "react";

interface IMenuItem {
  title: string;
  body: string;
}
const menu: IMenuItem[] = [
  {
    title: "About SparkFi",
    body: "SparkFi  is a launchpad platform built on the Base blockchain, designed to support new blockchain projects in a decentralized manner.",
  },
  {
    title: "SparkFi Mission",
    body: "SparkFi’s mission is to provide a decentralized launchpad platform on the Base blockchain for new and innovative blockchain projects to be launched and achieve their full potential.",
  },
  {
    title: "Built on Base",
    body: "Base offer a secure, low-cost, flexible and developer-friendly Ethereum L2 blockchain platform that support a wide range of use cases, from gaming and entertainment to finance and commerce.",
  },
];

interface IAboutProps {}

const About: FunctionComponent<IAboutProps> = () => {
  return (
    <Box mt={{ xs: "110px", md: "240px" }}>
      <Grid container spacing={{ xs: 5, sm: 10 }}>
        {menu.map((item, idx) => (
          <Grid item key={idx} xs={12} md={6} lg={4} sx={{}}>
            <Box
              position="relative"
              sx={{
                border: "1px solid #979FDE",
                pt: "113px",
                pb: "103px",
                height: "100%",
                px: "45px",
                bgcolor: "background.default",
              }}
            >
              <Box
                position="absolute"
                sx={{
                  top: "19px",
                  bottom: 0,
                  left: 0,
                  width: "calc(100% + 18px)",
                  border: "1px solid #979FDE",
                  zIndex: -1,
                }}
              ></Box>
              <Box
                position="absolute"
                sx={{
                  top: "14px",
                  right: "19px",
                  width: "76px",
                  height: "62px",
                  border: "1px solid #979FDE",
                }}
              ></Box>
              <Box
                position="absolute"
                sx={{
                  top: "31px",
                  right: "35px",
                  width: "76px",
                  bgcolor: "background.default",
                  height: "62px",
                  border: "1px solid #979FDE",
                }}
              ></Box>
              <Typography mb="37px" fontWeight="bold" fontSize="20px">
                {item.title}
              </Typography>
              <Typography fontWeight={500}>{item.body}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
