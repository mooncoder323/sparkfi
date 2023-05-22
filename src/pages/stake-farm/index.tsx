import { Box, Divider } from "@mui/material";
import Sidebar from "components/Sidebar";
import { Header } from "components/layouts/Header";

const StakeFarm = () => {
  return (
    <Box>
      <Box my={1}>
        <Header />
      </Box>
      <Divider
        sx={{ borderColor: "#3A3E5C", position: "relative", zIndex: 2 }}
      />
      <Sidebar />
    </Box>
  );
};

export default StakeFarm;
