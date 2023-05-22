import { Box, Grid } from "@mui/material";
import ArrowsIcon from "components/icons/ArrowsIcon";
import EarnYieldIcon from "components/icons/EarnYieldIcon";
import LaunchpadIcon from "components/icons/LaunchpadIcon";
import PoolIcon from "components/icons/PoolIcon";
import type { FunctionComponent } from "react";
import Feature from "./Feature";

interface IMenuItem {
  Icon: JSX.Element;
  title: string;
  body: string;
  triangeColor: string;
  triangePos: "left" | "right";
}
const features: IMenuItem[] = [
  {
    title: "Swap",
    body: "Swap between tokens in your wallet quickly and cheaply. Our smart contracts take only seconds to complete your order.",
    Icon: <ArrowsIcon />,
    triangeColor: "#FFF95E",
    triangePos: "right",
  },
  {
    title: "Earn Yield",
    body: "Earn rewards by providing liquidity in boosted AMM pools. Our reward pools offer yield opportunities without the risk of impermanent loss.",
    Icon: <EarnYieldIcon />,
    triangeColor: "#6100FF",
    triangePos: "left",
  },
  {
    title: "Pool",
    body: "Provide liquidity for any Base token and enjoy competitive APY rates. A little transaction fees is paid to liquidity providers as a reward when a token swap is completed.",
    Icon: <PoolIcon />,
    triangeColor: "#FFF95E",
    triangePos: "right",
  },
  {
    title: "Launchpad",
    body: "Participate in the very early stage of the next big innovations building on the world’s highest performance Ethereum L2 blockchain-BASE.",
    Icon: <LaunchpadIcon />,
    triangeColor: "#6100FF",
    triangePos: "left",
  },
];

const Features: FunctionComponent = () => {
  return (
    <Box sx={{ mt: { xs: "91px", md: "250px" } }}>
      <Grid container spacing={12}>
        {features.map((feature, idx) => (
          <Grid key={idx} item xs={12} md={6}>
            <Feature
              triangleColor={feature.triangeColor}
              trianglePos={feature.triangePos}
              Icon={feature.Icon}
              body={feature.body}
              title={feature.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
