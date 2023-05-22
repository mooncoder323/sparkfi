import { Box, Typography } from "@mui/material";
import FancyAccordion from "components/common/FancyAccordion";
import type { FunctionComponent } from "react";

interface IMenuItem {
  text: string;
  body: string;
}
const menu: IMenuItem[] = [
  {
    text: "What is SparkFi?",
    body: "SparkFi  is a launchpad platform built on the Base blockchain, designed to support new blockchain projects in a decentralized manner.",
  },
  {
    text: "What kind of projects can we expect to see launch on SparkFi?",
    body: "We only select the best of the best projects. Projects to look out for focused on blockchain games, NFTs, metaverse, DeFi, and other recent developments in the blockchain space.",
  },
  {
    text: "How to participate in IDO?",
    body: "Buy and stake SPAK or SPAK-LP tokens to gain IDOs allocation and wait for IDO pools to open. When the pool is open, participate by depositing a min amount of desired token allocation you want to purchase in ETH.",
  },
  {
    text: "Is SparkFi multichain?",
    body: "Currently, it is only on BASE. Other chains will be added gradually to make SparkFi a multichain launchpad.",
  },
  {
    text: "When can we claim the IDO tokens?",
    body: "Token unlock/claim will be as per the vesting schedule of the project.",
  },
  {
    text: "Why Base?",
    body: "Base offer a secure, low-cost, flexible and developer-friendly Ethereum L2 blockchain platform that support a wide range of use cases, from gaming and entertainment to finance and commerce.",
  },
  {
    text: "Will there be a token? Where can I learn about it if so.",
    body: "The token is expected to launch in Q2-Q3 of 2023.",
  },
  {
    text: "How can I contact the team?",
    body: "You can get intouch with the team via all our social handles.",
  },
];

const FAQ: FunctionComponent = () => {
  return (
    <Box mt="144px" mb={{ xs: "76px", md: "194px" }}>
      <Box mb="110px">
        <Typography
          fontSize={40}
          textAlign={{ xs: "left", md: "center" }}
          fontWeight={600}
        >
          Frequently Asked Questions
        </Typography>
      </Box>
      <FancyAccordion menu={menu} />
    </Box>
  );
};

export default FAQ;
