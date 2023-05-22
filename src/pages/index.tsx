import { Box } from "@mui/material";
import ApplyForLaunch from "components/ApplyForLaunch";
import FAQ from "components/FAQ";
import Features from "components/Features";
import HeroSection from "components/HeroSection";

import { Layout } from "components/layouts/Layout";

const Index = () => {
  return (
    <Layout>
      <Box>
        <HeroSection />
        <Features />
        {/* <About /> */}
        {/* <Abilities /> */}
        {/* <Participate /> */}
        <FAQ />
        <ApplyForLaunch />
      </Box>
    </Layout>
  );
};

export default Index;
