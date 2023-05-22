import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Box } from "@mui/material";
import type { AccordionProps } from "@mui/material/Accordion";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import type { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import PlusIcon from "components/icons/PlusIcon";
import * as React from "react";
import FancyButton from "../FancyButton";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: `none`,
  backgroundColor: "background.default",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  " .MuiCollapse-root": {
    backgroundColor: "background.default",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper": {
    position: "absolute",
    right: 0,
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    paddingRight: "38px",
  },
  " .MuiCollapse-root": {
    backgroundColor: "background.default",
  },
  position: "relative",
  paddingLeft: 0,
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "none",
}));

interface IMenuItem {
  text: string;
  body: string;
}

const FancyAccordion: React.FunctionComponent<{ menu: IMenuItem[] }> = ({
  menu,
}) => {
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box display="flex" gap="85px" flexDirection={{ xs: "column", md: "row" }}>
      <Box display="flex" flexDirection="column" gap="54px">
        {menu.slice(0, menu.length / 2).map((item, idx) => (
          <Accordion
            key={idx}
            expanded={expanded === `panel${idx + 1}`}
            onChange={handleChange(`panel${idx + 1}`)}
          >
            <AccordionSummary
              sx={{
                pr: "12px !important",
              }}
              expandIcon={
                <FancyButton>
                  <PlusIcon />
                </FancyButton>
              }
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography fontWeight={500}>{item.text}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "background.default" }}>
              <Typography fontWeight={500}>{item.body}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Box display="flex" flexDirection="column" gap="54px">
        {menu.slice(menu.length / 2).map((item, idx) => (
          <Accordion
            key={idx}
            expanded={expanded === `panel${menu.length - idx}`}
            onChange={handleChange(`panel${menu.length - idx}`)}
          >
            <AccordionSummary
              expandIcon={
                <FancyButton>
                  <PlusIcon />
                </FancyButton>
              }
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography fontWeight={500}>{item.text}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "background.default" }}>
              <Typography fontWeight={500}>{item.body}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FancyAccordion;
