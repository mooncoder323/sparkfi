import { Box, Typography } from "@mui/material";
import TriangleLeftIcon from "components/icons/TriangleLeftIcon";
import TriangleRightIcon from "components/icons/TriangleRightIcon";
import type { FunctionComponent } from "react";

interface IFeatureProps {
  Icon: JSX.Element;
  title: string;
  body: string;
  trianglePos: "left" | "right";
  triangleColor: string;
}

const Feature: FunctionComponent<IFeatureProps> = ({
  Icon,
  body,
  title,
  trianglePos,
  triangleColor,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#0F1122",
        height: "800px",
        pt: "65px",

        position: "relative",
      }}
    >
      <Box
        position="absolute"
        sx={{
          bottom: "0",
          left: "0",
          right: "0",
          display: "flex",
        }}
      >
        {trianglePos === "right" && <TriangleRightIcon color={triangleColor} />}
        {trianglePos === "left" && <TriangleLeftIcon color={triangleColor} />}
      </Box>
      <Box mb="34px" display="flex" justifyContent="center">
        {Icon}
      </Box>
      <Typography
        mb="48px"
        sx={{
          fontSize: { xs: "40px", md: "50px" },
          fontWeight: 500,
          textAlign: "center",
          background:
            "linear-gradient(87.58deg, #6100FF 2.97%, #FFF95E 47.72%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
          "text-fill-color": "transparent",
        }}
      >
        {title}
      </Typography>
      <Typography textAlign="center" px="63px">
        {body}
      </Typography>
    </Box>
  );
};

export default Feature;
