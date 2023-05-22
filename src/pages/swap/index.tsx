import { Box, Divider } from "@mui/material";
import Exchange from "components/Exchange";
import Sidebar from "components/Sidebar";
import { Header } from "components/layouts/Header";

const Swap = () => {
  return (
    <Box>
      <Box my={1}>
        <Header />
      </Box>
      <Divider
        sx={{ borderColor: "#3A3E5C", position: "relative", zIndex: 2 }}
      />
      <Exchange />
      <Sidebar />
    </Box>
  );
};

export default Swap;
