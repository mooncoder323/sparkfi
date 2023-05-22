import { Link as MuiLink } from "@mui/material";
import Link from "next/link";
import type { FunctionComponent } from "react";

interface ILinkProps {
  text: string;
  link: string;
  isActive: boolean;
}

const MenuLink: FunctionComponent<ILinkProps> = ({ link, text, isActive }) => {
  return (
    <MuiLink
      href={link}
      component={Link}
      underline="none"
      sx={{
        color: isActive ? "#fff" : "#3A3E5C",
        fontWeight: isActive ? "bold" : 500,
      }}
    >
      {text}
    </MuiLink>
  );
};

export default MenuLink;
