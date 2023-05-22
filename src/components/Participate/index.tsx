import { Box, Grid, Typography } from "@mui/material";
import type { FunctionComponent } from "react";

interface IMenuItem {
  text: string;
}
const menu: IMenuItem[] = [
  {
    text: "Buy and stake SPAK or SPAK-LP tokens to gain IDOs allocation and wait for IDO pools to open.",
  },
  {
    text: "When the pool is open, participate by depositing a min amount of desired token allocation you want to purchase in ETH.",
  },
  {
    text: "When pool end, claim the purchased tokens as per the project's vesting schedule.",
  },
];

interface IAboutProps {}

const Participate: FunctionComponent<IAboutProps> = () => {
  return (
    <Box mt={{ xs: "32px", md: "240px" }}>
      <Typography mb="54px" fontSize={40} textAlign="center" fontWeight={600}>
        How to Participate
      </Typography>
      <Grid container spacing={10}>
        {menu.map((item, idx) => (
          <Grid
            item
            key={idx}
            xs={12}
            md={idx !== menu.length - 1 ? 6 : 12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box display="flex">
              <Box
                sx={{
                  background:
                    "linear-gradient(90deg, rgb(97, 0, 255) 0%, rgb(244, 12, 193) 100%)",
                  borderRadius: "50%",
                }}
                p="1px"
              >
                <Box
                  sx={{
                    bgcolor: "background.default",
                    height: "300px",
                    width: "300px",
                    px: "37px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "50%",
                  }}
                >
                  <Typography textAlign="center" fontWeight={500}>
                    {item.text}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Participate;
