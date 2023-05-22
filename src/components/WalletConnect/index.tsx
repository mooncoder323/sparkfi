import {
  Box,
  Button,
  Fade,
  Modal,
  Grid as MuiGrid,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { handleInjectedProvider, handleWalletConnect } from "lib";
import Link from "next/link";
import { useContext } from "react";
import { globalContext } from "store";

const WalletConnect = (props: { open: any; handleClose: any }) => {
  const { open, handleClose } = props;
  const { dispatch } = useContext(globalContext);

  const handleConnectWallet = async (wallet: string) => {
    try {
      const { account, web3 } =
        wallet === "WALLETCONNECT"
          ? await handleWalletConnect(dispatch)
          : await handleInjectedProvider(dispatch);
      const balance = await web3.eth.getBalance(account);
      console.log("balance", balance);
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      aria-labelledby="wallet-connect-title"
      aria-describedby="wallet-connect-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            maxWidth: "100%",
          }}
        >
          <Box
            sx={{
              background:
                "linear-gradient(90deg, rgb(97, 0, 255) 0%, rgb(255, 249, 94) 100%)",
              padding: "1px",
            }}
          >
            <Box py="14px" px="11px" sx={{ background: "#101221" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  padding: { xs: "10px 0 0 10px", md: "30px 0 0 30px" },
                }}
              >
                <img
                  src="/images/cryptocurrencies/walletIcon.png"
                  width={60}
                  alt="WalletIcon"
                />
                <Typography
                  variant="h5"
                  component="p"
                  sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    fontWeight: "bold",
                    color: "#3A3E5C",
                  }}
                >
                  Select a Wallet
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: { xs: "10px 0 0 10px", md: "20px 0 0 30px" },
                }}
              >
                <Typography
                  mt={1.5}
                  color="#F5F5F5"
                  fontSize={{ xs: "12px", md: "14px" }}
                  fontWeight="bold"
                >
                  Please select a wallet to connect to this dapp:
                </Typography>
              </Box>
              <MuiGrid container spacing={2}>
                <MuiGrid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: {
                        xs: "30px 0 0 10px",
                        md: "50px 0 0 30px",
                      },
                    }}
                  >
                    <Button
                      variant="text"
                      onClick={() => handleConnectWallet("METAMASK")}
                      sx={{
                        gap: 3,
                        padding: 3,
                        width: "100%",
                        height: "100px",
                      }}
                    >
                      <img
                        src="/images/cryptocurrencies/MetaMask.png"
                        width={60}
                        alt="WalletIcon"
                      />
                      <Typography
                        component="p"
                        sx={{
                          fontSize: { xs: "14px", md: "16px" },
                          fontWeight: "bold",
                          color: "#F5F5F5",
                        }}
                      >
                        MetaMask
                      </Typography>
                    </Button>
                  </Box>
                </MuiGrid>
                <MuiGrid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: {
                        xs: "30px 0 0 10px",
                        md: "50px 0 0 30px",
                      },
                    }}
                  >
                    <Button
                      variant="text"
                      onClick={() => handleConnectWallet("WALLETCONNECT")}
                      sx={{
                        gap: 3,
                        padding: 3,
                        width: "100%",
                        height: "100px",
                      }}
                    >
                      <img
                        src="/images/cryptocurrencies/WalletConnect.png"
                        width={60}
                        alt="WalletIcon"
                      />
                      <Typography
                        component="p"
                        sx={{
                          fontSize: { xs: "14px", md: "16px" },
                          fontWeight: "bold",
                          color: "#F5F5F5",
                        }}
                      >
                        Wallet Connect
                      </Typography>
                    </Button>
                  </Box>
                </MuiGrid>
              </MuiGrid>
              <Box
                sx={{
                  padding: { xs: "50px 0 20px 10px", md: "60px 0 20px 30px" },
                }}
              >
                <Typography
                  mt={1.5}
                  color="#0029FF"
                  fontSize={{ xs: "12px", md: "14px" }}
                  fontWeight="bold"
                >
                  <MuiLink href="/liquidity" component={Link}>
                    What is a wallet?
                  </MuiLink>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default WalletConnect;
