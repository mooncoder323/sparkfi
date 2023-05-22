import { Box, Hidden, Typography } from "@mui/material";
import Logo from "components/common/Logo";
import DiscordIcon from "components/icons/social/DiscordIcon";
import GitbookIcon from "components/icons/social/GitbookIcon";
import GithubIcon from "components/icons/social/GithubIcon";
import MediumIcon from "components/icons/social/MediumIcon";
import TelegramIcon from "components/icons/social/TelegramIcon";
import TwitterIcon from "components/icons/social/TwitterIcon";
import { useRouter } from "next/router";
import type { FunctionComponent } from "react";
import MenuLink from "./Link";

interface IMenuItem {
  text: string;
  link: string;
}
const menu: IMenuItem[] = [
  {
    text: "Swap",
    link: "/swap",
  },
  {
    text: "Liquidity",
    link: "/liquidity",
  },
  {
    text: "Pools",
    link: "/pools",
  },
  {
    text: "Stake & Farm",
    link: "/stake-farm",
  },
  {
    text: "Launchpad",
    link: "/launchpad",
  },
  {
    text: "DAO Governance",
    link: "/dao-governace",
  },
];

const Sidebar: FunctionComponent = () => {
  const router = useRouter();

  return (
    <Hidden mdDown>
      <Box
        width="230px"
        sx={{
          backgroundColor: "#101221",
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            px: 3,
          }}
        >
          <Box
            mb={5}
            sx={{
              borderRight: "1px solid #3A3E5C",
              width: " 206px",
              padding: "18px 0",
            }}
          >
            <Logo />
          </Box>
          {menu.map((item) => (
            <MenuLink
              isActive={router.route === item.link}
              key={item.text}
              link={item.link}
              text={item.text}
            />
          ))}
        </Box>
        <Box px={1} mt="130px">
          <Box display="flex" gap="12px" sx={{ path: { fill: "#3A3E5C" } }}>
            <a
              target="_blank"
              href="https://twitter.com/sparkfi_xyz"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
            <a target="_blank" href="https://t.me/sparkfi_xyz" rel="noreferrer">
              <TelegramIcon />
            </a>
            <a
              target="_blank"
              href="https://github.com/SparkFi-Labs"
              rel="noreferrer"
            >
              <GithubIcon />
            </a>
            <a target="_blank" href="https://docs.sparkfi.xyz" rel="noreferrer">
              <GitbookIcon />
            </a>
            <a
              target="_blank"
              href="https://sparkfi-xyz.medium.com"
              rel="noreferrer"
            >
              <MediumIcon />
            </a>
            <a
              target="_blank"
              href="https://discord.com/invite/WtBvqvuaTu"
              rel="noreferrer"
            >
              <DiscordIcon />
            </a>
          </Box>
          <Typography color="#3A3E5C" fontSize={11}>
            Copyright © 2023 SparkFi. All rights reserved.
          </Typography>
          <Box display="flex" gap={0.5}>
            <Box
              color="#3A3E5C"
              sx={{ textDecoration: "none" }}
              fontSize={11}
              component="a"
              target="_blank"
              href="https://discord.com/invite/WtBvqvuaTu"
              rel="noreferrer"
            >
              Docs |
            </Box>{" "}
            <Box
              sx={{ textDecoration: "none" }}
              color="#3A3E5C"
              fontSize={11}
              component="a"
              target="_blank"
              href="https://discord.com/invite/WtBvqvuaTu"
              rel="noreferrer"
            >
              Github |
            </Box>{" "}
            <Box
              sx={{ textDecoration: "none" }}
              color="#3A3E5C"
              fontSize={11}
              component="a"
              target="_blank"
              href="https://discord.com/invite/WtBvqvuaTu"
              rel="noreferrer"
            >
              Bug Bounty
            </Box>
          </Box>
        </Box>
      </Box>
    </Hidden>
  );
};

export default Sidebar;
