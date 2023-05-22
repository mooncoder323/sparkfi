import { Box, Container } from "@mui/material";
import type { FC, PropsWithChildren } from "react";

import Footer from "components/Footer";
import { useRouter } from "next/router";
import { Header } from "./Header";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  return (
    <Box>
      <Container maxWidth="xl" sx={{ pt: "26px" }}>
        <Header />
        <Container
          component="section"
          sx={{ height: "calc(100% - 60px)", maxWidth: "1300px" }}
        >
          {children}
        </Container>
      </Container>
      {router.asPath === "/" && <Footer />}
    </Box>
  );
};
